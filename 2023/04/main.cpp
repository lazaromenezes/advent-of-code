#include <iostream>
#include <fstream>
#include <string>
#include "definitions.h"

using aoc2023_04::Scratchcards;
using aoc2023_04::Scratchcard;

using std::getline;
using std::cout;

int main(int argc, char *argv[]) {
    auto inputFilePath = argc == 1 ? "./input" : argv[1];
    
    std::ifstream inputFile(inputFilePath, std::ifstream::in);

    int totalPoints = 0;

    string line;

    while(getline(inputFile, line)){
        Scratchcard card = Scratchcard::fromString(line);
        
        totalPoints += card.points();
    };

    cout << "Total points: " << totalPoints << "\n";

    inputFile.close();
};