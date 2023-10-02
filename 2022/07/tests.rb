require_relative "prompt_parser"
require_relative "tree_builder"
require "test/unit"

class TestPromptParser < Test::Unit::TestCase
  def test_is_command_if_starts_with_dollar_sign
    assert_true is_command? "$ cd /"
    assert_false is_command? "dir c"
    assert_false is_command? "123456 cd"
  end

  def test_is_dir_if_starts_with_dir_keyword
    assert_true is_dir? "dir a"
    assert_false is_dir? "$ cd a"
    assert_false is_dir? "123465 a"
  end

  def test_is_file_if_starts_with_anything_but_dollar_and_dir_keyword
    assert_true is_file? "29116 f"
    assert_false is_file? "$ f"
    assert_false is_file? "dir f"
  end

  def test_is_cd_command
    assert_true is_cd? "$ cd /"
    assert_false is_cd? "$ ls /"
  end

  def test_is_ls_command
    assert_true is_ls? "$ ls /"
    assert_false is_ls? "$ cd /"
  end

  def test_parse_cd_command
    target_dir = parse_cd_command "$ cd /"

    assert_equal "/", target_dir
  end

  def test_parse_dir
    target_dir = parse_dir "dir a"

    assert_equal "a", target_dir
  end

  def test_parse_file
    parsed = parse_file "29116 f"

    file = { "name" => "f", "size" => 29116 }

    assert_equal file, parsed
  end
end

class TreeBuilderTests < Test::Unit::TestCase
  def test_build_root_directory_tree

    input = ["$ cd /", "$ ls", "dir a", "14848514 b.txt", "8504156 c.dat", "dir d"].join "\n"

    expected = {
      "/" => {
        "a" => {},
        "b.txt" => 14848514,
        "c.dat" => 8504156,
        "d" => {}
      }
    }

    tree = build_tree input

    assert_equal expected, tree
  end

  def test_build_directory_tree

    input = ["$ cd /", 
             "$ ls", 
             "dir a", 
             "14848514 b.txt", 
             "8504156 c.dat", 
             "dir d",
             "$ cd a",
             "$ ls",
             "dir e",
             "$ cd e",
             "2557 g"].join "\n"

    expected = {
      "/" => {
        "a" => {"e" => {"g" => 2557}},
        "b.txt" => 14848514,
        "c.dat" => 8504156,
        "d" => {}
      }
    }

    tree = build_tree input

    assert_equal expected, tree
  end

  def test_build_directory_tree_with_two_children

    input = [
      "$ cd /",
      "$ ls",
      "dir a",
      "14848514 b.txt",
      "8504156 c.dat",
      "dir d",
      "$ cd a",
      "$ ls",
      "dir e",
      "$ cd e",
      "$ ls",
      "584 i",
      "$ cd ..",
      "$ cd ..",
      "$ cd d",
      "$ ls",
      "7214296 k"
    ].join "\n"

    expected = {
      "/" => {
        "a" => {"e" => {"i" => 584}},
        "b.txt" => 14848514,
        "c.dat" => 8504156,
        "d" => {"k" => 7214296}
      }
    }

    tree = build_tree input

    puts tree

    assert_equal expected, tree
  end

  def test_calc_dir_size
    
    input = ["$ cd /", 
             "$ ls", 
             "dir a", 
             "14848514 b.txt", 
             "8504156 c.dat"
    ]

    tree = build_tree input.join "\n"

    assert_equal 23352670, (dir_size tree)
  end

  def test_calc_dir_size_with_max_size
    
    input = ["$ cd /", 
             "$ ls", 
             "dir a", 
             "14848514 b.txt", 
             "8504156 c.dat",
             "5000 d.dat",
             "7000 f.dat"
    ]

    tree = build_tree input.join "\n"

    assert_equal 12000, (dir_size tree, 10000)
  end
end

class EndToEndTest < Test::Unit::TestCase
  def test_given_example
    file = File.open("./test-input.txt")
    
    tree = build_tree file.read

    size = dir_size tree, 100000

#    assert_equal(95437, size)
  end
end
