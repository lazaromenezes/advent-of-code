#include "definitions.h"
#include <math.h>

namespace aoc2023_04 {
    const std::regex CARD_ID_REGEX = std::regex("Card (\\d{1,}):");
    const std::regex NUMBER_REGEX = std::regex("(\\d{1,})");

    int Scratchcard::points(){
        if(numbers.empty())
            return 0;

        int intersects = -1;
        
        for(int n : numbers)
            if(std::find(winNumbers.begin(), winNumbers.end(), n) != std::end(winNumbers))
                intersects++;

        return std::pow(2, intersects);
    }

    Scratchcard Scratchcard::fromString(string cardString){
        std::smatch match;

        std::regex_search(cardString, match, CARD_ID_REGEX);

        int id = atoi(match[1].str().c_str());

        NumberList _winNumbers, _numbers;

        int startSeek = cardString.find(COLLON);
        
        string numbers = cardString.substr(startSeek);

        int separatorPos = numbers.find(PIPE);

        auto begin = std::sregex_iterator(numbers.begin(), numbers.end(), NUMBER_REGEX);
        auto end = std::sregex_iterator();

        for(auto i = begin; i != end; ++i){
            std::smatch match = *i;
            int number = atoi(match.str().c_str());

            match.position() < separatorPos ? _winNumbers.emplace_back(number) : _numbers.emplace_back(number);
        }

        return Scratchcard{.id = id, .winNumbers = _winNumbers, .numbers = _numbers};
    }
}