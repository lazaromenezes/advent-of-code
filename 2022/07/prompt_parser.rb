def is_command? prompt_line
  return prompt_line[0] == "$"
end

def is_dir? prompt_line
  return prompt_line.start_with? "dir"
end

def is_file? prompt_line
  return !(self.is_command? prompt_line or self.is_dir? prompt_line)
end

def is_cd? prompt_line
  return prompt_line.start_with? "$ cd"
end

def is_ls? prompt_line
  return prompt_line.start_with? "$ ls"
end

def parse_cd_command command
  return command.split[2]
end

def parse_dir line
  return line.split[1]
end

def parse_file line
  split = line.split
  return { "name" => split[1],
           "size" => Integer(split[0])
  }
end
