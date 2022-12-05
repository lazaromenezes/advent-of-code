import unittest
import main

class TestParser(unittest.TestCase):

    def test_parser_can_split_in_two_groups(self):
        parser = main.Parser()

        text_input = "AAA\n\nBBB\n"

        stacks, moves = parser.split(text_input)

        self.assertEqual("AAA", stacks)
        self.assertEqual("BBB", moves)

    def test_parse_can_parse_moves(self):
        parser = main.Parser()

        move_input = "move 1 from 2 to 1\n"

        move = parser.parse_move(move_input)

        self.assertEqual(1, move["amount"])
        self.assertEqual("2", move["source"])
        self.assertEqual("1", move["to"])

    def test_parse_can_parse_multiple_moves(self):
        parser = main.Parser()

        move_input = "move 1 from 2 to 1\nmove 3 from 5 to 2\n"

        moves = parser.parse_moves(move_input)

        self.assertEqual(1, moves[0]["amount"])
        self.assertEqual("2", moves[0]["source"])
        self.assertEqual("1", moves[0]["to"])

        self.assertEqual(3, moves[1]["amount"])
        self.assertEqual("5", moves[1]["source"])
        self.assertEqual("2", moves[1]["to"])

    def test_parse_can_parse_crate_input(self):
        parser = main.Parser()

        crate_input =  "    [D]    \n"
        crate_input += "[N] [C]    \n"
        crate_input += "[Z] [M] [P]\n"
        crate_input += " 1   2   3 \n"

        crates = parser.parse_crate(crate_input)

        self.assertEqual(3, len(crates))
        self.assertEqual(["Z", "N"], crates["1"])
        self.assertEqual(["M", "C", "D"], crates["2"])
        self.assertEqual(["P"], crates["3"])

 
class TestCrane(unittest.TestCase):

    def test_crane_can_move_crate_between_stacks(self):
        stacks = {
                "1": ["Z", "N"],
                "2": ["M", "C", "D"],
                "3": ["P"]
        }

        move = {"amount": 1, "source": "1", "to": "3"}

        crane = main.Crane()

        crane.move(stacks, move)

        self.assertEqual(["Z"], stacks["1"])
        self.assertEqual(["P", "N"], stacks["3"])

    def test_crane_can_move_n_crates_between_stacks(self):
        stacks = {
                "1": ["Z", "N"],
                "2": ["M", "C", "D"],
                "3": ["P"]
        }

        move = {"amount": 3, "source": "2", "to": "3"}

        crane = main.Crane()

        crane.move(stacks, move)

        self.assertEqual([], stacks["2"])
        self.assertEqual(["P", "D", "C", "M"], stacks["3"])

class TestEndToEnd(unittest.TestCase):

    def test_end_to_end(self):
        
        result = main.find_result_for('./test-input.txt')
        self.assertEqual('CMZ', result)

