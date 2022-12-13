import unittest
from app import App

class AppTest(unittest.TestCase):

    def test_end_to_end_part_one(self):
    
        app = App()

        total = app.sum_register_value("test-input.txt")

        self.assertEqual(13140, total)


