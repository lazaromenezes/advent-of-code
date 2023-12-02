#include <string>
#include <vector>
#include <gtest/gtest.h>
#include <gmock/gmock.h>

#include "number-finder.h"

using ::std::string;
using ::std::vector;
using ::aoc2023_01::number_finder;

namespace aoc2023_01_tests {
  TEST(NUMBER_FINDER, can_extract_number_from_row) {
    
    number_finder finder = number_finder();

    string input = "1abc2";

    int found_number = finder.findNumber(input);

    ASSERT_EQ(found_number, 12);
  }

  TEST(NUMBER_FINDER, can_extract_number_from_mid_row) {
    
    number_finder finder = number_finder();

    string input = "pqr3stu8vwx";

    int found_number = finder.findNumber(input);

    ASSERT_EQ(found_number, 38);
  }

  TEST(NUMBER_FINDER, can_extract_number_from_mid_row_even_with_additional_numbers) {
    
    number_finder finder = number_finder();

    string input = "a1b2c3d4e5f";

    int found_number = finder.findNumber(input);

    ASSERT_EQ(found_number, 15);
  }

  TEST(NUMBER_FINDER, can_extract_number_from_row_with_single_number) {       
    number_finder finder = number_finder();

    string input = "treb7uchet";

    int found_number = finder.findNumber(input);

    ASSERT_EQ(found_number, 77);
  }
}
