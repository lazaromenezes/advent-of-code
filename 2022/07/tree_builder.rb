require_relative "prompt_parser"

def build_tree input, tree={}, current = 0

  commands = input.strip().split "\n"

  loop do
    line = commands[current]

    current += 1

    if current == commands.length
      break 
    end

    if is_dir? line
      dir = parse_dir line
      tree[dir] = {}
    end

    if is_file? line
      file = parse_file line
      tree[file["name"]] = file["size"]
    end

    if is_cd? line
      dir = parse_cd_command line

      if dir == ".."
        break  
      else
        input = input.split(line)[1]
        tree[dir] = build_tree input
      end
    end
  end

  return tree
end

def dir_size tree, threshold = nil 
  size = 0
  for k, v in tree
    if v.is_a? Integer
      if threshold != nil
        size += v < threshold ? v : 0
      else
        size += v
      end
    else 
      if v != nil
        size += dir_size tree[k], threshold
      end
    end
  end
  return size
end
