#include <vector>
#include <string>
#include <regex>

using std::string;
using std::vector;

namespace aoc2023_04 {
    const char PIPE = '|';
    const char COLLON = ':';
    const char SPACE = ' ';

    typedef vector<int> NumberList;

    struct Scratchcard{
        int id;
        int amount = 1;
        NumberList winNumbers;
        NumberList numbers;

        static Scratchcard fromString(string string);
        int points();
        int nmatches();
    };

    typedef vector<Scratchcard> Scratchcards;
}