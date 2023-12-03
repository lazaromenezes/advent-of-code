#include <gtest/gtest.h>
#include <gmock/gmock.h>
#include <string>
#include <vector>

#include "definitions.h"

using testing::Eq;
using aoc2023_03::NumberFinder;
using aoc2023_03::Parts;

namespace aoc2023_03_tests {
    TEST(NUMBER_FINDER, can_find_single_number_in_a_row){
        string numberRow = "...5...";

        NumberFinder finder = NumberFinder();

        Parts foundNumbers = finder.findNumbers(numberRow);

        ASSERT_THAT(foundNumbers[0].partNumber, Eq("5"));
        ASSERT_THAT(foundNumbers[0].mapPosition, Eq(3));
    }

    TEST(NUMBER_FINDER, can_find_bigger_number_in_a_row){
        string numberRow = "...532...";

        NumberFinder finder = NumberFinder();

        Parts foundNumbers = finder.findNumbers(numberRow);

        ASSERT_THAT(foundNumbers[0].partNumber, Eq("532"));
        ASSERT_THAT(foundNumbers[0].mapPosition, Eq(3));
    }

    TEST(NUMBER_FINDER, can_find_multiple_numbers_in_a_row){
        string numberRow = "...5...532...";

        NumberFinder finder = NumberFinder();

        Parts foundNumbers = finder.findNumbers(numberRow);

        ASSERT_THAT(foundNumbers[0].partNumber, Eq("5"));
        ASSERT_THAT(foundNumbers[0].mapPosition, Eq(3));

        ASSERT_THAT(foundNumbers[1].partNumber, Eq("532"));
        ASSERT_THAT(foundNumbers[1].mapPosition, Eq(7));
    }

    TEST(NUMBER_FINDER, can_find_multiple_numbers_in_a_row_with_symbols){
        string numberRow = "...5*...532.#.";

        NumberFinder finder = NumberFinder();

        Parts foundNumbers = finder.findNumbers(numberRow);

        ASSERT_THAT(foundNumbers[0].partNumber, Eq("5"));
        ASSERT_THAT(foundNumbers[0].mapPosition, Eq(3));

        ASSERT_THAT(foundNumbers[1].partNumber, Eq("532"));
        ASSERT_THAT(foundNumbers[1].mapPosition, Eq(8));
    }

    TEST(NUMBER_FINDER, can_find_complex_setup) {
        string numberRow = "..307....$.....504.638*6";

        NumberFinder finder = NumberFinder();

        Parts foundNumbers = finder.findNumbers(numberRow);

        ASSERT_THAT(foundNumbers[0].partNumber, Eq("307"));
        ASSERT_THAT(foundNumbers[0].mapPosition, Eq(2));

        ASSERT_THAT(foundNumbers[1].partNumber, Eq("504"));
        ASSERT_THAT(foundNumbers[1].mapPosition, Eq(15));

        ASSERT_THAT(foundNumbers[2].partNumber, Eq("638"));
        ASSERT_THAT(foundNumbers[2].mapPosition, Eq(19));

        ASSERT_THAT(foundNumbers[3].partNumber, Eq("6"));
        ASSERT_THAT(foundNumbers[3].mapPosition, Eq(23));
    }
}