#include <gtest/gtest.h>
#include <gmock/gmock.h>
#include <string>
#include <vector>

#include "definitions.h"

using testing::Eq;
using aoc2023_03::NumberValidator;
using aoc2023_03::Grid;

namespace aoc2023_03_tests {
    TEST(NUMBER_VALIDATOR, is_not_valid_if_boundary_is_all_periods){
        std::string row = "..5..";

        Grid grid = {
            ".....",
            "..5..",
            "....."
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_FALSE(validator.isValid(1, {"5", 2}));
    }

    TEST(NUMBER_VALIDATOR, is_valid_if_boundary_has_a_non_period_character){
        std::string row = "..5..";

        Grid grid = {
            ".#...",
            "..5..",
            "....."
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_TRUE(validator.isValid(1, {"5", 2}));
    }

    TEST(NUMBER_VALIDATOR, is_not_valid_if_boundary_is_all_periods_and_in_first_row){
        std::string row = "..5..";

        Grid grid = {
            "..5..",
            "....."
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_FALSE(validator.isValid(0, {"5", 2}));
    }

    TEST(NUMBER_VALIDATOR, is_valid_if_boundary_is_all_periods_and_in_first_row){
        std::string row = "..5..";

        Grid grid = {
            "..5..",
            "..#.."
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_TRUE(validator.isValid(0, {"5", 2}));
    }

    TEST(NUMBER_VALIDATOR, is_not_valid_if_boundary_is_all_periods_and_in_last_row){
        std::string row = "..5..";

        Grid grid = {
            ".....",
            "..5.."
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_FALSE(validator.isValid(1, {"5", 2}));
    }

    TEST(NUMBER_VALIDATOR, is_valid_if_boundary_is_all_periods_and_in_last_row){
        std::string row = "..5..";

        Grid grid = {
            "..#..",
            "..5.."
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_TRUE(validator.isValid(1, {"5", 2}));
    }

    TEST(NUMBER_VALIDATOR, is_not_valid_if_boundary_is_all_periods_and_in_last_row_first_column){
        std::string row = "..5..";

        Grid grid = {
            ".....",
            "5...."
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_FALSE(validator.isValid(1, {"5", 0}));
    }

    TEST(NUMBER_VALIDATOR, is_valid_if_boundary_is_all_periods_and_in_last_row_first_column){
        std::string row = "..5..";

        Grid grid = {
            ".#...",
            "5...."
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_TRUE(validator.isValid(1, {"5", 0}));
    }

    TEST(NUMBER_VALIDATOR, is_not_valid_if_boundary_is_all_periods_bigger_number){
        std::string row = "..567..";

        Grid grid = {
            ".......",
            "..567..",
            "......."
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_FALSE(validator.isValid(1, {"567", 2}));
    }

    TEST(NUMBER_VALIDATOR, is_valid_if_boundary_has_a_non_period_character_bigger_number){
        std::string row = "..567*.";

        Grid grid = {
            ".......",
            "..567*.",
            "......."
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_TRUE(validator.isValid(1, {"567", 2}));
    }

    TEST(NUMBER_VALIDATOR, is_valid_if_boundary_number_is_at_the_end){
        std::string row = "..307....$.....504.638*6";

        Grid grid = {
            "...*....................",
            "..307....$.....504.638*6",
            "........885......*......"
        };

        NumberValidator validator = NumberValidator(grid);

        EXPECT_TRUE(validator.isValid(1, {"6", 23}));
    }
}