#include <string>
#include <map>
#include <regex>

using std::string;
using std::map;
using std::regex;

extern map<string, string> LITERAL_MAP;

namespace aoc2023_01 {
    const regex LITERALS("one|two|three|four|five|six|seven|eight|nine");

    class replacer {
        public:
            string replaceNumbers(string input);
    };
}