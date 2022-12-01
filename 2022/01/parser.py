class ListParser(object):

    def parse(self, list_input):

        lists = [l for l in list_input.split("\n\n")]

        result = []

        for l in lists:
            result.append([int(i) for i in l.split("\n") if i != ""]) 

        return result

    def parse_from_file(self, path):

        with open(path, 'r') as file:
            raw_list = file.read()
            return self.parse(raw_list)
