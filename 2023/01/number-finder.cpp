#include "number-finder.h"
#include "replacer.h"
#include <regex>
#include <iterator>
#include <vector>

using std::regex;
using std::regex_search;
using std::smatch;
using std::vector;

namespace aoc2023_01 {
    int number_finder::findNumber(string input) {
        regex digits_regex("\\d");
        
        smatch matches;
        vector<int> results = {};

        while(regex_search(input, matches, digits_regex)){
            results.emplace_back(atoi(matches[0].str().c_str()));
            input = matches.suffix();
        };

        int first = results[0];
        int last = results[results.size() - 1];

        return first * 10 + last;
    }
}