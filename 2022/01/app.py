from parser import ListParser
from counter import Counter

class App(object):

    def find_max_from_list(self, path, n = 1):

        parser = ListParser()
        counter = Counter()

        all_lists = parser.parse_from_file(path)
        
        all_totals = counter.total_calories(all_lists)

        all_totals.sort(reverse = True)

        return sum(all_totals[:n])

