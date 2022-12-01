from parser import ListParser
from counter import Counter

class App(object):

    def find_max_from_list(self, path):

        parser = ListParser()
        counter = Counter()

        all_lists = parser.parse_from_file(path)

        return max(counter.total_calories(all_lists))
