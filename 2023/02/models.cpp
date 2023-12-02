#include "models.h"
#include <regex>

using std::smatch;

namespace aoc2023_02{
    Draw Draw::fromString(string drawString){
        int red, green, blue = 0;        
        smatch matches;
        
        regex_search(drawString, matches, RED_REGEX);
        red = atoi(matches[1].str().c_str());

        regex_search(drawString, matches, GREEN_REGEX);
        green = atoi(matches[1].str().c_str());

        regex_search(drawString, matches, BLUE_REGEX);
        blue = atoi(matches[1].str().c_str());

        return Draw{red, green, blue};
    }

    bool Bag::canDraw(Draw draw){
        return draw.red <= red 
            && draw.green <= green 
            && draw.blue <= blue;
    }

    Game Game::fromString(string gameString){
        int id;

        smatch matches;
        
        regex_search(gameString, matches, GAME_ID_REGEX);
        id = atoi(matches[1].str().c_str());

        return {.id = id, .draws = buildDraws(gameString)};
    }

    vector<Draw> Game::buildDraws(string gameString){
        size_t initial, block;

        vector<Draw> draws{};

        initial = gameString.find(':');
        int i = 0;
        do{
            block = gameString.find(';', initial + 1);

            string drawString = gameString.substr(initial + 1, block);

            draws.emplace_back(Draw::fromString(drawString));

            initial = block;
        }while(block != string::npos);

        return draws;
    }

    bool Game::isValid(Bag bag){
        for(Draw draw: draws)
            if(!bag.canDraw(draw))
                return false;

        return true;
    }
}