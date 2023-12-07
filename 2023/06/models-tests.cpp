#include "gtest/gtest.h"
#include "gmock/gmock.h"
#include "definitions.h"

using aoc2023_06::Races;
using aoc2023_06::Race;

namespace aoc2023_06_tests {
    TEST(MODELS, can_create_a_list_of_races) {
        std::string times = "Time:      7  15   30";
        std::string distances = "Distance:  9  40  200";

        Races races = aoc2023_06::buildRaces(times, distances);

        ASSERT_EQ(races.size(), 3);

        ASSERT_EQ(races[0].allowedTime, 7);
        ASSERT_EQ(races[0].recordDistance, 9);

        ASSERT_EQ(races[1].allowedTime, 15);
        ASSERT_EQ(races[1].recordDistance, 40);

        ASSERT_EQ(races[2].allowedTime, 30);
        ASSERT_EQ(races[2].recordDistance, 200);
    }

    TEST(MODELS, distance_travelled_is_zero_if_time_pressed_is_zero){
        Race race = Race(7, 9);

        int distance = race.calculateDistance(0);

        ASSERT_EQ(distance, 0);
    }

    TEST(MODELS, distance_travelled_is_zero_if_time_pressed_is_total_allowed){
        Race race = Race(7, 9);

        int distance = race.calculateDistance(7);

        ASSERT_EQ(distance, 0);
    }

    TEST(MODELS, distance_travelled_is_zero_if_time_pressed_is_bigger_than_allowed){
        Race race = Race(7, 9);

        int distance = race.calculateDistance(9);

        ASSERT_EQ(distance, 0);
    }

    TEST(MODELS, distance_travelled_is_the_product_of_time_pressed_and_time_difference){
        Race race = Race(7, 9);

        int times[6] = {1, 2, 3, 4, 5, 6};
        int expected[6] = {6, 10, 12, 12, 10, 6};

        for(int i = 0; i < 6; i++)
            ASSERT_EQ(expected[i], race.calculateDistance(times[i]));      
    }

    TEST(MODELS, winning_chances_is_the_amount_of_times_above_record){
        Race race1 = Race(7, 9);
        Race race2 = Race(15, 40);
        Race race3 = Race(30, 200);

        Races races = {race1, race2, race3};
        int expected[3] = {4, 8, 9};

        for(int r = 0; r < races.size(); r++)
            ASSERT_EQ(expected[r], aoc2023_06::winningChances(races[r]));
    }
};
