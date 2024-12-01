#include "gtest/gtest.h"
#include "gmock/gmock.h"
#include "definitions.h"

using aoc2023_08::NavigationInstructions;

namespace aoc2023_08_tests{
    TEST(INSTRUCTIONS, next_returns_first_instruction_if_brand_new){
        auto instructions = NavigationInstructions("LR");

        auto next = instructions.next();

        ASSERT_EQ('L', next);
    }

    TEST(INSTRUCTIONS, next_navigates_to_next_instruction){
        auto instructions = NavigationInstructions("LR");

        instructions.next();
        auto next = instructions.next();

        ASSERT_EQ('R', next);
    }

    TEST(INSTRUCTIONS, next_gets_back_to_beginning_after_reaching_last_position){
        auto instructions = NavigationInstructions("LR");

        instructions.next();
        instructions.next();
        auto next = instructions.next();

        ASSERT_EQ('L', next);
    }
}