#include <vector>
#include <string>
#include <vector>
#include <map>

namespace aoc2023_06 {
    struct Race {
        int allowedTime;
        int recordDistance;

        Race(int allowedTime, int recordDistance) {
            this->allowedTime = allowedTime;
            this->recordDistance = recordDistance;
        }

        int calculateDistance(int timePressed);
    };

    typedef std::vector<Race> Races;

    Races buildRaces(std::string times, std::string distances);
    int winningChances(Race race);
}