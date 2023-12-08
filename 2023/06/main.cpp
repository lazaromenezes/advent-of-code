#include <iostream>
#include <fstream>
#include <string>
#include <algorithm>
#include "definitions.h"
#include "../aoclib2023.h"

using std::getline;
using std::cout;
using std::string;

int main(int argc, char *argv[]) {
    aoclib2023::withInput(argc, argv, [](std::ifstream& inputFile){
        string times, distances;

        getline(inputFile, times);
        getline(inputFile, distances);

        inputFile.close();

        long winningChances = 1;

        for(auto race : aoc2023_06::buildRaces(times, distances))
            winningChances *= aoc2023_06::winningChances(race);

        cout << "Winning chances: " << winningChances << "\n";

        auto singlRace = aoc2023_06::Race::fromStrings(times, distances);

        cout << "Single race winning chances: " 
            << aoc2023_06::winningChances(singlRace) 
            << "\n";
    });
};
