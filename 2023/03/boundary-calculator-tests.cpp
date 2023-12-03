#include <gtest/gtest.h>
#include <gmock/gmock.h>
#include <set>

#include "definitions.h"

using testing::Eq;
using aoc2023_03::BoundaryCalculator;
using aoc2023_03::Boundary;
using aoc2023_03::PartNumber;

namespace aoc2023_03_tests {
    TEST(BOUNDARY_FINDER, can_calculate_boundary_points_for_single_number){
        const int ROW_NUMBER = 2;
        const string ROW = "...5...";

        Boundary expected{
            {ROW_NUMBER - 1, 2}, {ROW_NUMBER, 2}, {ROW_NUMBER + 1, 2}, {ROW_NUMBER, 4},
            {ROW_NUMBER - 1, 3}, {ROW_NUMBER + 1, 3},
            {ROW_NUMBER - 1, 4}, {ROW_NUMBER + 1, 4}
        };

        BoundaryCalculator calculator = BoundaryCalculator();

        Boundary actual = calculator.calculateBoundary(ROW_NUMBER, ROW, {"5", 0});

        ASSERT_THAT(actual, Eq(expected));
    }

    TEST(BOUNDARY_FINDER, can_calculate_boundary_points_for_bigger_number){
        const int ROW_NUMBER = 2;
        const string ROW = "......532...";

        Boundary expected{
            {ROW_NUMBER - 1, 5}, {ROW_NUMBER, 5}, {ROW_NUMBER + 1, 5}, {ROW_NUMBER, 9},
            {ROW_NUMBER - 1, 6}, {ROW_NUMBER + 1, 6},
            {ROW_NUMBER - 1, 7}, {ROW_NUMBER + 1, 7},
            {ROW_NUMBER - 1, 8}, {ROW_NUMBER + 1, 8},
            {ROW_NUMBER - 1, 9}, {ROW_NUMBER + 1, 9}
        };

        BoundaryCalculator calculator = BoundaryCalculator();

        Boundary actual = calculator.calculateBoundary(ROW_NUMBER, ROW, {"532", 0});

        ASSERT_THAT(actual, Eq(expected));
    }

    TEST(BOUNDARY_FINDER, can_calculate_boundary_points_for_repeated_number){
        const int ROW_NUMBER = 2;
        const int COL_NUMBER = 12;
        const string ROW = "......532...532..";

        Boundary expected{
            {ROW_NUMBER - 1, COL_NUMBER - 1}, {ROW_NUMBER, COL_NUMBER - 1}, {ROW_NUMBER + 1, COL_NUMBER - 1}, {ROW_NUMBER, COL_NUMBER + 3},
            {ROW_NUMBER - 1, COL_NUMBER}, {ROW_NUMBER + 1, COL_NUMBER},
            {ROW_NUMBER - 1, COL_NUMBER + 1}, {ROW_NUMBER + 1, COL_NUMBER + 1},
            {ROW_NUMBER - 1, COL_NUMBER + 2}, {ROW_NUMBER + 1, COL_NUMBER + 2},
            {ROW_NUMBER - 1, COL_NUMBER + 3}, {ROW_NUMBER + 1, COL_NUMBER + 3}
        };

        BoundaryCalculator calculator = BoundaryCalculator();

        PartNumber part = {"532", 12};

        Boundary actual = calculator.calculateBoundary(ROW_NUMBER, ROW, part);

        ASSERT_THAT(actual, Eq(expected));
    }

    TEST(BOUNDARY_FINDER, can_calculate_boundary_points_for_second_number_by_the_end_of_the_row){
        const int ROW_NUMBER = 2;
        const int COL_NUMBER = 7;
        const string ROW = "...638*6";

        Boundary expected{
            {ROW_NUMBER - 1, COL_NUMBER - 1}, {ROW_NUMBER, COL_NUMBER - 1}, {ROW_NUMBER + 1, COL_NUMBER - 1}, {ROW_NUMBER, COL_NUMBER + 1},
            {ROW_NUMBER - 1, COL_NUMBER}, {ROW_NUMBER + 1, COL_NUMBER},
            {ROW_NUMBER - 1, COL_NUMBER + 1}, {ROW_NUMBER + 1, COL_NUMBER + 1}
        };

        BoundaryCalculator calculator = BoundaryCalculator();

        PartNumber part = {"6", COL_NUMBER};

        Boundary actual = calculator.calculateBoundary(ROW_NUMBER, ROW, part);

        ASSERT_THAT(actual, Eq(expected));
    }
}