#include "definitions.h"
#include <regex>

namespace aoc2023_06{

    std::vector<int> extractDigits(std::string str){
        const std::regex DIGIT("(\\d{1,})");

        auto begin = std::sregex_iterator(str.begin(), str.end(), DIGIT);
        auto end = std::sregex_iterator();

        std::vector<int> numbers;

        for(auto m = begin; m != end; ++m){
            std::smatch match = *m;
            numbers.push_back(atoi(match.str().c_str()));
        }

        return numbers;
    }

    int Race::calculateDistance(int timePressed){
        if(timePressed > allowedTime)
            return 0;

        return timePressed * (allowedTime - timePressed);
    }

    Races buildRaces(std::string times, std::string distances){
        Races races;

        auto time = extractDigits(times);
        auto dist = extractDigits(distances);

        for(int i = 0; i < time.size(); i++){
            races.emplace_back(time[i], dist[i]);
        }

        return races;
    }

    int winningChances(Race race){
        int winningCall = 0;

        for(int i = 0; i <= race.allowedTime; i++)
            if(race.calculateDistance(i) > race.recordDistance)
                winningCall++;

        return winningCall;
    }
}