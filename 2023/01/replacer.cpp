#include "replacer.h"

using std::regex_search;
using std::smatch;

namespace aoc2023_01 {

    map<string, string> LITERAL_MAP {
        {"one", "1"}, {"two", "2"}, {"three", "3"}, {"four", "4"}, {"five", "5"},
        {"six", "6"}, {"seven", "7"}, {"eight", "8"}, {"nine", "9"},
    };

    string replacer::replaceNumbers(string input){
        
        smatch matches;        

        while(regex_search(input, matches, LITERALS)){
            std::ssub_match match = matches[0];
            string suffix = match.str()[match.length() - 1] + matches.suffix().str();
            input = matches.prefix().str() + LITERAL_MAP[match.str()] + suffix;
        };
        
        return input;
    }
}