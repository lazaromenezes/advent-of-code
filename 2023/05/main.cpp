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

    aoc2023_05::Locations locations;

    string line;
    getline(inputFile, line);

    std::cout << "Parsing seeds: " << line << "\n";

    aoc2023_05::Seeds seeds = aoc2023_05::parseSeeds(line);

    aoc2023_05::Almanac almanac = {};

    std::cout << "Parsing maps: \n";

    while(getline(inputFile, line)){        
        if(!line.empty()) {
            std::cout << "\tParsing: " << line << "...";

            if(line.find(aoc2023_05::MAP_TAG) == std::string::npos)
                almanac[almanac.size() - 1].emplace_back(aoc2023_05::MapRange::fromString(line));
            else
                almanac.emplace_back(aoc2023_05::Map{});

            std::cout << "Parsed!\n";
        }
    };

    std::cout << "Calculating: \n";

    for(auto seed : seeds){
        long destination = seed;
        for(int m = 0; m < almanac.size(); m++){
            std::cout << "\t " << destination << " maps to ";
            destination = aoc2023_05::mapDestination(almanac[m], destination);
            std::cout << destination << ";\n";
        }
        std::cout << "\n------------\n";
        locations.emplace_back(destination);
    }

    auto result = std::min_element(locations.begin(), locations.end());

    std::cout << "Closest Location: " << *result << "\n";

    inputFile.close();
};
