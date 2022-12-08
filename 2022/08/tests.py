import unittest
import app

class EndToEndTest(unittest.TestCase):

    def test_part_1_end_to_end(self):
        with open("./test-input.txt") as f:
            visible_trees = app.count_visible_trees(f.read())

            self.assertEqual(21, visible_trees)

    def test_part_2_end_to_end(self):
        with open("./test-input.txt") as f:
            max_points = app.find_max_points(f.read())

            self.assertEqual(8, max_points)

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

    def test_tree_is_visible_in_middle_bigger_range(self):
        arrangement = ["30373", "25512", "65332"]
        position = {"x": 2, "y": 1}

        self.assertTrue(app.is_visible(arrangement, position))

class TestPoints(unittest.TestCase):
    def test_calculated_points_is_zero_for_top_edge(self):
        arrangement =  ["30373", "25512", "65332", "65332"]
        position = {"x": 2, "y": 0}
        
        self.assertEqual(0, app.calculate_points(arrangement, position))

    def test_calculated_points_is_zero_for_right_edge(self):
        arrangement =  ["30373", "25512", "65332", "65332"]
        position = {"x": 4, "y": 1}
        
        self.assertEqual(0, app.calculate_points(arrangement, position))

    def test_calculated_points_is_zero_for_bottom_edge(self):
        arrangement =  ["30373", "25512", "65332", "65332"]
        position = {"x": 2, "y": 3}
        
        self.assertEqual(0, app.calculate_points(arrangement, position))

    def test_calculated_points_is_zero_for_left_edge(self):
        arrangement =  ["30373", "25512", "65332", "65332"]
        position = {"x": 0, "y": 2}
        
        self.assertEqual(0, app.calculate_points(arrangement, position))

    def test_calculate_points_looking_up(self):
        arrangement =  ["30373", "25512", "65332", "65332"]
        position = {"x": 2, "y": 1}

        points = app.calculate_points(arrangement, position)

        self.assertEqual(1, points[0])

    def test_calculate_points_looking_right(self):
        arrangement =  ["30373", "25512", "65332", "65332"]
        position = {"x": 2, "y": 1}

        points = app.calculate_points(arrangement, position)

        self.assertEqual(2, points[1])

    def test_calculate_points_looking_bottom(self):
        arrangement =  ["30373", "25512", "65332", "65332"]
        position = {"x": 2, "y": 1}

        points = app.calculate_points(arrangement, position)

        self.assertEqual(2, points[2])

    def test_calculate_points_looking_left(self):
        arrangement =  ["30373", "25512", "65332", "65332"]
        position = {"x": 2, "y": 1}

        points = app.calculate_points(arrangement, position)

        self.assertEqual(1, points[3])

    def test_calculate_points_when_find_same_size(self):
        arrangement =  ["30373", "52512", "65332", "65332"]
        position = {"x": 2, "y": 1}

        points = app.calculate_points(arrangement, position)

        self.assertEqual(2, points[3])

    def test_calculate_points_when_find_bigger_size(self):
        arrangement =  ["30373", "92512", "65332", "65332"]
        position = {"x": 2, "y": 1}

        points = app.calculate_points(arrangement, position)

        self.assertEqual(2, points[3])
