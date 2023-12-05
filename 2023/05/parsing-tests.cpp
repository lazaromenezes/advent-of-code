#include <gtest/gtest.h>
#include <gmock/gmock.h>
#include "definitions.h"

using aoc2023_05::Seeds;
using testing::ElementsAre;
using aoc2023_05::parseSeeds;

namespace aoc2023_05_tests {
    TEST(PARSE_SEEDS, parse_seeds_row_properly){
        std::string seedString = "seeds: 10 5 30 2";

        Seeds seeds = parseSeeds(seedString);

        ASSERT_EQ(seeds[0].start, 10);
        ASSERT_EQ(seeds[0].amount, 5);

        ASSERT_EQ(seeds[1].start, 30);
        ASSERT_EQ(seeds[1].amount, 2);
    };
}