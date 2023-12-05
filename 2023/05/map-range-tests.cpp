#include <gtest/gtest.h>
#include <gmock/gmock.h>
#include "definitions.h"

using aoc2023_05::MapRange;
using aoc2023_05::Map;
using aoc2023_05::Seeds;
using aoc2023_05::mapDestination;
using aoc2023_05::parseSeeds;

using testing::ElementsAre;

namespace aoc2023_05_tests {
    TEST(MAP_RANGE, from_string_creates_map_range_properly){
        const std::string RANGE_STRING = "39 0 15";

        MapRange range = MapRange::fromString(RANGE_STRING);

        ASSERT_EQ(range.destinationStart, 39);
        ASSERT_EQ(range.sourceStart, 0);
        ASSERT_EQ(range.range, 15);
    }

    TEST(MAP_RANGE, from_string_creates_map_range_properly_with_big_numbers){
        const std::string RANGE_STRING = "1034839539 1237439510 142052261";

        MapRange range = MapRange::fromString(RANGE_STRING);

        ASSERT_EQ(range.destinationStart, 1034839539);
        ASSERT_EQ(range.sourceStart, 1237439510);
        ASSERT_EQ(range.range, 142052261);
    }

    TEST(MAP_RANGE, maps_to_source_if_not_in_range){
        const std::string RANGE_STRING = "52 50 48";

        MapRange range = MapRange::fromString(RANGE_STRING);

        ASSERT_EQ(range.map(10), 10);
    }

    TEST(MAP_RANGE, maps_to_destination_if_in_range){
        MapRange range = MapRange{.destinationStart = 1, .sourceStart = 20, .range = 5};

        ASSERT_EQ(range.map(20), 1);
        ASSERT_EQ(range.map(21), 2);
        ASSERT_EQ(range.map(22), 3);
        ASSERT_EQ(range.map(23), 4);
        ASSERT_EQ(range.map(24), 5);
        ASSERT_EQ(range.map(25), 6);
    }

    TEST(MAP_DESTINATION, maps_to_source_if_not_in_any_range){
        MapRange range1 = MapRange{.destinationStart = 50, .sourceStart = 98, .range = 2};
        MapRange range2 = MapRange{.destinationStart = 52, .sourceStart = 50, .range = 48};

        Map map = {range1, range2};

        const long SOURCE = 20;

        ASSERT_EQ(mapDestination(map, SOURCE), SOURCE);
    }

    TEST(MAP_DESTINATION, maps_to_proper_destination){
        MapRange range1 = MapRange{.destinationStart = 50, .sourceStart = 98, .range = 2};
        MapRange range2 = MapRange{.destinationStart = 52, .sourceStart = 50, .range = 48};

        Map map = {range1, range2};

        const long SOURCE = 99;
        const long DEST = 51;

        ASSERT_EQ(mapDestination(map, SOURCE), DEST);
    }

    TEST(PARSE_SEEDS, parse_seeds_row_properly){
        std::string seedString = "seeds: 79 14 55 13";

        Seeds seeds = parseSeeds(seedString);

        ASSERT_THAT(seeds, ElementsAre(79, 14, 55, 13));
    }

    TEST(MAP_DESTINATION, using_big_ranges){
        MapRange range1 = MapRange{.destinationStart = 1288156819, .sourceStart = 0, .range = 597717};

        Map map = {range1};

        const long SOURCE = 78570222;
        const long DEST = 51;

        ASSERT_EQ(mapDestination(map, SOURCE), DEST);
    }
}