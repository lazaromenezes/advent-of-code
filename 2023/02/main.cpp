#include <iostream>
#include <fstream>
#include <string>

#include "models.h"

using std::cout;
using std::getline;

using aoc2023_02::Bag;
using aoc2023_02::Game;
using aoc2023_02::Draw;

int main(int argc, char *argv[]) {
    auto inputFilePath = argc == 1 ? "./input" : argv[1];
    
    std::ifstream inputFile(inputFilePath, std::ifstream::in);

    Bag bag{.red = 12, .green = 13, .blue = 14};

    int total = 0;

    string line;

    while(getline(inputFile, line)){
        Game game = Game::fromString(line);
        
        total += game.isValid(bag) ? game.id : 0;
    };

    inputFile.close();

    cout << "Total: " << total << "\n";
}