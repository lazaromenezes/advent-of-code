#include <vector>
#include <string>
#include <vector>
#include <map>

namespace aoc2023_06 {
    struct Race {
        long allowedTime;
        long recordDistance;

        Race(long allowedTime, long recordDistance) {
            this->allowedTime = allowedTime;
            this->recordDistance = recordDistance;
        }

        long calculateDistance(long timePressed);

        static Race fromStrings(std::string times, std::string distances);
    };

    typedef std::vector<Race> Races;

    Races buildRaces(std::string times, std::string distances);
    long winningChances(Race race);
}