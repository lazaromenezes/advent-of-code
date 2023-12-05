#include "definitions.h"
#include <iostream>
#include <regex>
#include "../aoclib2023.h"

namespace aoc2023_05 {
    Seeds parseSeeds(std::string seedsString){
        const char COLON = ':';
        const std::regex DIGITS("(\\d{1,})");

        std::string sub = aoclib2023::split(seedsString, COLON)[1];

        std::sregex_iterator begin = std::sregex_iterator(sub.begin(), sub.end(), DIGITS);
        std::sregex_iterator end = std::sregex_iterator();
        
        Seeds seeds;

        for(auto match = begin; match != end; ++match){
            std::smatch smatch = *match;

            seeds.emplace_back(atol(smatch.str().c_str()));
        }

        return seeds;
    }
}