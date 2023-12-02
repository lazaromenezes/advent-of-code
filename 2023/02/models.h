#include <vector>
#include <string>
#include <regex>

using std::string;
using std::vector;

using std::regex;

namespace aoc2023_02{
    const regex RED_REGEX("(\\d{1,}) red");
    const regex GREEN_REGEX("(\\d{1,}) green");
    const regex BLUE_REGEX("(\\d{1,}) blue");
    const regex GAME_ID_REGEX("Game (\\d{1,}):");

    struct Draw{
        int red, green, blue;

        static Draw fromString(string drawString);
    };
    
    struct Bag{
        int red, green, blue;

        bool canDraw(Draw draw);
        int power();
    };

    struct Game{
        int id;
        vector<Draw> draws;

        bool isValid(Bag bag);
        int minRequiredPower();

        static Game fromString(string gameString);

        private:
            static vector<Draw> buildDraws(string gameString);
    };
}