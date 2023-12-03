#include <string>
#include <gtest/gtest.h>
#include <gmock/gmock.h>

#include "replacer.h"

using ::std::string;
using ::std::vector;
using ::aoc2023_01::replacer;

namespace aoc2023_01_tests {

  TEST(REPLACER, can_replace_one) {
    ASSERT_EQ(replacer().replaceNumbers("one"), "1e");
  }

  TEST(REPLACER, can_replace_two) {
     ASSERT_EQ(replacer().replaceNumbers("two"), "2o");
  }

  TEST(REPLACER, can_replace_three) {
     ASSERT_EQ(replacer().replaceNumbers("three"), "3e");
  }

  TEST(REPLACER, can_replace_four) {
     ASSERT_EQ(replacer().replaceNumbers("four"), "4r");
  }

  TEST(REPLACER, can_replace_five) {
     ASSERT_EQ(replacer().replaceNumbers("five"), "5e");
  }

  TEST(REPLACER, can_replace_six) {
      ASSERT_EQ(replacer().replaceNumbers("six"), "6x");
  }

  TEST(REPLACER, can_replace_seven) {
      ASSERT_EQ(replacer().replaceNumbers("seven"), "7n");
  }

  TEST(REPLACER, can_replace_eight) {
      ASSERT_EQ(replacer().replaceNumbers("eight"), "8t");
  }

  TEST(REPLACER, can_replace_nine) {
      ASSERT_EQ(replacer().replaceNumbers("nine"), "9e");
  }

  TEST(REPLACER, can_replace_multiple_literals_between_numbers) {
      ASSERT_EQ(replacer().replaceNumbers("4nineeightseven2"), "49e8t7n2");
  }

  TEST(REPLACER, can_replace_multiple_literals_in_edges) {
      ASSERT_EQ(replacer().replaceNumbers("two1nine"), "2o19e");
  }

  TEST(REPLACER, can_replace_literals_leaving_unsued_letters) {
      ASSERT_EQ(replacer().replaceNumbers("abcone2threexyz"), "abc1e23exyz");
  }

  TEST(REPLACER, can_replace_overlaping_literals_smaller_first) {
      ASSERT_EQ(replacer().replaceNumbers("zoneight234"), "z18t234");
  }

  TEST(REPLACER, can_replace_overlaping_literals_bigger_first) {
      ASSERT_EQ(replacer().replaceNumbers("eightwothree"), "82o3e");
  }
}

