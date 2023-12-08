#include <iostream>
#include <fstream>
#include <string>

#include "models.h"
#include "../aoclib2023.h"

using std::cout;
using std::getline;

using aoc2023_02::Bag;
using aoc2023_02::Game;
using aoc2023_02::Draw;

int main(int argc, char *argv[]) {
    aoclib2023::withInput(argc, argv, [](std::ifstream& inputFile){
        Bag bag{.red = 12, .green = 13, .blue = 14};

        int total = 0;
        int requiredPower = 0;

        string line;

        while(getline(inputFile, line)){
            Game game = Game::fromString(line);
            
            total += game.isValid(bag) ? game.id : 0;
            requiredPower += game.minRequiredPower();
        };

        cout << "Total: " << total << "\n";
        cout << "Required Power: " << requiredPower << "\n";
    });
}