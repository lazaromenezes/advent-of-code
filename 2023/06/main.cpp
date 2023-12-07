#include <iostream>
#include <fstream>
#include <string>
#include <algorithm>
#include "definitions.h"

using std::getline;
using std::cout;
using std::string;

int main(int argc, char *argv[]) {
    auto inputFilePath = argc == 1 ? "./input" : argv[1];
    
    std::ifstream inputFile(inputFilePath, std::ifstream::in);

    string times, distances;

    getline(inputFile, times);
    getline(inputFile, distances);

    int winningChances = 1;

    for(auto race : aoc2023_06::buildRaces(times, distances))
        winningChances *= aoc2023_06::winningChances(race);

    inputFile.close();

    cout << "Winning chances: " << winningChances << "\n";
};
