import unittest
from app import App

class AppTest(unittest.TestCase):

    def test_end_to_end_part_one(self):
    
        app = App()

        total = app.sum_register_value("test-input.txt")

        self.assertEqual(13140, total)

    def test_draw_crt(self):
    
        app = App()

        crt = app.build_crt("test-input.txt")

        with open("test-output.txt", 'r') as out:
            expected = out.read().strip().replace("\n", "")
            self.assertEqual(expected, "".join(crt))
