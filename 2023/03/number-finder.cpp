#include "definitions.h"

using std::smatch;
using std::regex_search;

namespace aoc2023_03 {
    Parts NumberFinder::findNumbers(string row) {
        
        smatch matches;
        Parts foundNumbers{};

        int lastPosition = 0;

        while(regex_search(row, matches, NUMBER_REGEX)){
            auto match = matches[0];
            foundNumbers.emplace_back(PartNumber{.partNumber = match.str(), .mapPosition = lastPosition + matches.position(0)});
            lastPosition += matches.prefix().length() + match.str().size();
            row = matches.suffix();
        }

        return foundNumbers;
    }
}