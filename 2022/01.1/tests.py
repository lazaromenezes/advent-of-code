import unittest
from counter import Counter
from parser import ListParser
from app import App

class CounterTest(unittest.TestCase):

    def test_counter_can_sum_calories_from_multiple_elves(self):
        counter = Counter()

        total = counter.total_calories([[100, 200, 300], [500, 500], [200]])

        self.assertEqual([600, 1000, 200], total)


class ListParserTest(unittest.TestCase):

    def test_parse_returns_a_list_of_numbers(self):
        parser = ListParser()    

        test_input = "100\n200\n300"

        parsed_list = parser.parse(test_input)

        self.assertEqual([[100, 200, 300]], parsed_list)

    def test_parse_returns_a_list_of_numbers_with_extra_line_break(self):
        parser = ListParser()    

        test_input = "100\n200\n300\n"

        parsed_list = parser.parse(test_input)

        self.assertEqual([[100, 200, 300]], parsed_list)

    def test_parse_returns_multiple_lists_of_numbers(self):
        parser = ListParser()    

        test_input = "100\n200\n300\n\n500\n500\n\n200"

        parsed_list = parser.parse(test_input)

        self.assertEqual([[100, 200, 300], [500, 500], [200]], parsed_list)

    def test_parse_can_parse_from_file(self):
        parser = ListParser()

        expected_list = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]]
        parsed_list = parser.parse_from_file("test-input.txt")

        self.assertEqual(expected_list, parsed_list)


class AppTest(unittest.TestCase):

    def test_end_to_end_with_test_input(self):
    
        app = App()

        max_calories = app.find_max_from_list("test-input.txt")

        self.assertEqual(24000, max_calories)
