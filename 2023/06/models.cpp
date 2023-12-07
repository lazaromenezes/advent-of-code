#include "definitions.h"
#include <regex>

namespace aoc2023_06{

    std::vector<long> extractDigits(std::string str){
        const std::regex DIGIT("(\\d{1,})");

        auto begin = std::sregex_iterator(str.begin(), str.end(), DIGIT);
        auto end = std::sregex_iterator();

        std::vector<long> numbers;

        for(auto m = begin; m != end; ++m){
            std::smatch match = *m;
            numbers.push_back(atol(match.str().c_str()));
        }

        return numbers;
    }

    long extractNumber(std::string str){
        const std::regex DIGIT("(\\d)");

        auto begin = std::sregex_iterator(str.begin(), str.end(), DIGIT);
        auto end = std::sregex_iterator();

        std::string nstr = "";

        for(auto m = begin; m != end; ++m){
            std::smatch match = *m;
            nstr.append(match.str());
        }

        return atol(nstr.c_str());
    }

    long Race::calculateDistance(long timePressed){
        if(timePressed > allowedTime)
            return 0;

        return timePressed * (allowedTime - timePressed);
    }

    Race Race::fromStrings(std::string times, std::string distances){
        return Race(extractNumber(times), extractNumber(distances));
    }

    Races buildRaces(std::string times, std::string distances){
        Races races;

        auto time = extractDigits(times);
        auto dist = extractDigits(distances);

        for(long i = 0; i < time.size(); i++){
            races.emplace_back(time[i], dist[i]);
        }

        return races;
    }

    long winningChances(Race race){
        long halfAllowed = (race.allowedTime + race.allowedTime % 2) / 2;
        long attempt = 0;
        long distance = 0;

        for(int i = 0; i <= halfAllowed; i++){
            if(race.calculateDistance(i) > race.recordDistance)
                break;
            attempt++;
        }

        return (halfAllowed - attempt) * 2 + (race.allowedTime + 1) % 2;
    }
}