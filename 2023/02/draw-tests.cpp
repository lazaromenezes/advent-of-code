#include "models.h"

#include <gtest/gtest.h>
#include <string>

using aoc2023_02::Bag;
using aoc2023_02::Draw;
using std::string;

namespace aoc2023_02_tests {
    TEST(DRAW, test_fromString_can_create_full_draw_properly){
        
        string drawString = "6 red, 1 blue, 3 green";

        Draw draw = Draw::fromString(drawString);

        EXPECT_EQ(6, draw.red);
        EXPECT_EQ(3, draw.green);
        EXPECT_EQ(1, draw.blue);
    }

    TEST(DRAW, test_fromString_can_create_only_red_draw){
        
        string drawString = "5 red";

        Draw draw = Draw::fromString(drawString);

        EXPECT_EQ(5, draw.red);
        EXPECT_EQ(0, draw.green);
        EXPECT_EQ(0, draw.blue);
    }

    TEST(DRAW, test_fromString_can_create_only_green_draw){
        
        string drawString = "5 green";

        Draw draw = Draw::fromString(drawString);

        EXPECT_EQ(0, draw.red);
        EXPECT_EQ(5, draw.green);
        EXPECT_EQ(0, draw.blue);
    }

    TEST(DRAW, test_fromString_can_create_only_blue_draw){
        
        string drawString = "5 blue";

        Draw draw = Draw::fromString(drawString);

        EXPECT_EQ(0, draw.red);
        EXPECT_EQ(0, draw.green);
        EXPECT_EQ(5, draw.blue);
    }

    TEST(DRAW, test_fromString_can_create_mixed_draws){
        
        string drawString = "6 red, 3 green";

        Draw draw = Draw::fromString(drawString);

        EXPECT_EQ(6, draw.red);
        EXPECT_EQ(3, draw.green);
        EXPECT_EQ(0, draw.blue);
    }

    TEST(DRAW, test_fromString_can_create_draws_with_big_numbers){
        
        string drawString = "65 red, 300 green, 1984 blue";

        Draw draw = Draw::fromString(drawString);

        EXPECT_EQ(65, draw.red);
        EXPECT_EQ(300, draw.green);
        EXPECT_EQ(1984, draw.blue);
    }
}