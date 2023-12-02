#include "models.h"

#include <gtest/gtest.h>

using aoc2023_02::Bag;
using aoc2023_02::Draw;

namespace aoc2023_02_tests {
    TEST(BAG, test_draw_is_possible_if_all_values_are_bellow_available){
        const int RED = 12;
        const int GREEN = 13;
        const int BLUE = 14;

        Bag bag = Bag{.red = RED, .green = GREEN, .blue = BLUE};

        Draw draw = Draw{.red = RED - 1, .green = GREEN - 1, .blue = BLUE - 1};

        EXPECT_TRUE(bag.canDraw(draw));
    }

    TEST(BAG, test_draw_is_possible_if_all_values_are_same_as_available){
        const int RED = 12;
        const int GREEN = 13;
        const int BLUE = 14;

        Bag bag = Bag{.red = RED, .green = GREEN, .blue = BLUE};

        Draw draw = Draw{.red = RED, .green = GREEN, .blue = BLUE};

        EXPECT_TRUE(bag.canDraw(draw));
    }

    TEST(BAG, test_draw_is_impossible_if_red_is_more_than_available){
        const int RED = 12;
        const int GREEN = 13;
        const int BLUE = 14;

        Bag bag = Bag{.red = RED, .green = GREEN, .blue = BLUE};

        Draw draw = Draw{.red = RED + 1, .green = GREEN, .blue = BLUE};

        EXPECT_FALSE(bag.canDraw(draw));
    }

    TEST(BAG, test_draw_is_impossible_if_green_is_more_than_available){
        const int RED = 12;
        const int GREEN = 13;
        const int BLUE = 14;

        Bag bag = Bag{.red = RED, .green = GREEN, .blue = BLUE};

        Draw draw = Draw{.red = RED, .green = GREEN + 1, .blue = BLUE};

        EXPECT_FALSE(bag.canDraw(draw));
    }

    TEST(BAG, test_draw_is_impossible_if_blue_is_more_than_available){
        const int RED = 12;
        const int GREEN = 13;
        const int BLUE = 14;

        Bag bag = Bag{.red = RED, .green = GREEN, .blue = BLUE};

        Draw draw = Draw{.red = RED, .green = GREEN, .blue = BLUE + 1};

        EXPECT_FALSE(bag.canDraw(draw));
    }

    TEST(BAG, test_power_is_cube_amounts_multiplied){
        const int RED = 20;
        const int GREEN = 13;
        const int BLUE = 6;

        Bag bag = Bag{RED, GREEN, BLUE};

        EXPECT_EQ(1560, bag.power());
    }
}