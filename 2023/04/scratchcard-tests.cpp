#include <gtest/gtest.h>
#include <gmock/gmock.h>
#include "definitions.h"

using aoc2023_04::Scratchcard;
using testing::ElementsAre;

namespace aoc2023_04_tests {
    TEST(SCRATCHCARD, points_are_0_if_numbers_are_empty){
        Scratchcard card = Scratchcard();

        ASSERT_EQ(card.points(), 0);
    }

    TEST(SCRATCHCARD, single_matching_number_worthts_one_point){
        Scratchcard card = {.winNumbers = {3}, .numbers = {1, 2, 3}};

        ASSERT_EQ(card.points(), 1);
    }

    TEST(SCRATCHCARD, points_is_two_powered_to_the_total_of_intersecting_numbers_and_win_numbers_minus_one){
        Scratchcard card = {.winNumbers = {2, 3}, .numbers = {1, 2, 3}};

        ASSERT_EQ(card.points(), 2);
    }

    TEST(SCRATCHCARD, points_takes_in_account_repeated_numbers){
        Scratchcard card = {.winNumbers = {2, 3}, .numbers = {1, 2, 3, 3, 2}};

        ASSERT_EQ(card.points(), 8);
    }

    TEST(SCRATCHCARD, from_string_populates_id_properly){
        Scratchcard card = Scratchcard::fromString("Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36");

        ASSERT_EQ(card.id, 5);
    }

    TEST(SCRATCHCARD, from_string_populates_win_numbers_properly){
        Scratchcard card = Scratchcard::fromString("Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36");

        ASSERT_THAT(card.winNumbers, ElementsAre(87, 83, 26, 28, 32));
    }

    TEST(SCRATCHCARD, from_string_populates_numbers_properly){
        Scratchcard card = Scratchcard::fromString("Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36");

        ASSERT_THAT(card.numbers, ElementsAre(88, 30, 70, 12, 93, 22, 82, 36));
    }
}