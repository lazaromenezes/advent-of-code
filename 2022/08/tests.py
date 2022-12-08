import unittest
import app

class EndToEndTest(unittest.TestCase):

    def test_part_1_end_to_end(self):
        with open("./test-input.txt") as f:
            visible_trees = app.count_visible_trees(f.read())

            self.assertEqual(21, visible_trees)

class TestIsVisible(unittest.TestCase):

    def test_single_tree_is_visible(self):
        arrangement = ["1"]
        position = {"x": 0, "y": 0}

        self.assertTrue(app.is_visible(arrangement, position))

    def test_tree_is_visible_in_row(self):
        arrangement = ["2433"]
        position = {"x": 1, "y": 0}

        self.assertTrue(app.is_visible(arrangement, position))

    def test_tree_is_visible_in_column(self):
        arrangement = ["2", "4", "3", "3"]
        position = {"x": 0, "y": 1}

        self.assertTrue(app.is_visible(arrangement, position))

    def test_tree_is_not_visible_in_middle(self):
        arrangement = ["999", "989", "999"]
        position = {"x": 1, "y": 1}

        self.assertFalse(app.is_visible(arrangement, position))

    def test_tree_is_visible_in_middle(self):
        arrangement = ["777", "787", "777"]
        position = {"x": 1, "y": 1}

        self.assertTrue(app.is_visible(arrangement, position))

    def test_tree_is_not_visible_if_a_taller_exist_in_any_direction(self):
        arrangement = ["777", "787", "777"]
        position = {"x": 1, "y": 1}

        self.assertTrue(app.is_visible(arrangement, position))

    def test_tree_is_visible_in_top_edge(self):
        arrangement = ["767", "787", "777"]
        position = {"x": 1, "y": 0}

        self.assertTrue(app.is_visible(arrangement, position))

    def test_tree_is_visible_in_left_edge(self):
        arrangement = ["767", "587", "777"]
        position = {"x": 0, "y": 1}

        self.assertTrue(app.is_visible(arrangement, position))

    def test_tree_is_visible_in_bottom_edge(self):
        arrangement = ["787", "787", "777"]
        position = {"x": 1, "y": 2}

        self.assertTrue(app.is_visible(arrangement, position))

    def test_tree_is_visible_in_right_edge(self):
        arrangement = ["787", "787", "777"]
        position = {"x": 2, "y": 1}

        self.assertTrue(app.is_visible(arrangement, position))

    def test_tree_is_visible_in_mid_(self):
        arrangement = ["30373", "25612", "65332"]
        position = {"x": 2, "y": 1}

        self.assertTrue(app.is_visible(arrangement, position))
