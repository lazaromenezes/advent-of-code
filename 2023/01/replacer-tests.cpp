#include <string>
#include <gtest/gtest.h>
#include <gmock/gmock.h>

#include "replacer.h"

using ::std::string;
using ::std::vector;
using ::aoc2023_01::replacer;

namespace aoc2023_01_tests {

  TEST(AOC_2023_01_REPLACER, can_replace_one) {
    ASSERT_EQ(replacer().replaceNumbers("one"), "1");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_two) {
     ASSERT_EQ(replacer().replaceNumbers("two"), "2");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_three) {
     ASSERT_EQ(replacer().replaceNumbers("three"), "3");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_four) {
     ASSERT_EQ(replacer().replaceNumbers("four"), "4");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_five) {
     ASSERT_EQ(replacer().replaceNumbers("five"), "5");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_six) {
      ASSERT_EQ(replacer().replaceNumbers("six"), "6");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_seven) {
      ASSERT_EQ(replacer().replaceNumbers("seven"), "7");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_eight) {
      ASSERT_EQ(replacer().replaceNumbers("eight"), "8");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_nine) {
      ASSERT_EQ(replacer().replaceNumbers("nine"), "9");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_multiple_literals_between_numbers) {
      ASSERT_EQ(replacer().replaceNumbers("4nineeightseven2"), "49872");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_multiple_literals_in_edges) {
      ASSERT_EQ(replacer().replaceNumbers("two1nine"), "219");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_literals_leaving_unsued_letters) {
      ASSERT_EQ(replacer().replaceNumbers("abcone2threexyz"), "abc123xyz");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_overlaping_literals_smaller_first) {
      ASSERT_EQ(replacer().replaceNumbers("zoneight234"), "z1ight234");
  }

  TEST(AOC_2023_01_REPLACER, can_replace_overlaping_literals_bigger_first) {
      ASSERT_EQ(replacer().replaceNumbers("eightwothree"), "8wo3");
  }
}

