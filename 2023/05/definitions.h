#include <vector>
#include <string>
#include <vector>
#include <map>

namespace aoc2023_05 {
    const char SPACE = ' ';
    const std::string MAP_TAG = "map";
    
    struct MapRange {
        long destinationStart, sourceStart, range;
        
        static MapRange fromString(std::string string);

        long map(long source);
    };

    typedef std::vector<MapRange> Map;
    typedef std::vector<Map> Almanac;
    typedef std::vector<long> Seeds;
    typedef std::vector<long> Locations;

    long mapDestination(Map map, long source);
    Seeds parseSeeds(std::string seedsString);
}