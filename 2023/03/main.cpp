#include <iostream>
#include <fstream>
#include <string>
#include "definitions.h"

using std::cout;
using std::getline;

using aoc2023_03::Grid;
using aoc2023_03::NumberFinder;
using aoc2023_03::NumberValidator;
using aoc2023_03::PartNumber;

int main(int argc, char *argv[]) {
    auto inputFilePath = argc == 1 ? "./input" : argv[1];
    
    std::ifstream inputFile(inputFilePath, std::ifstream::in);

    Grid grid;

    string line;

    while(getline(inputFile, line)){
        grid.emplace_back(line);
    };

    inputFile.close();

    NumberFinder finder = NumberFinder();
    NumberValidator validator = NumberValidator(grid);

    int totalPartNumber = 0;

    for(int r = 0; r < grid.size(); r++){
        string row = grid[r];

        auto parts = finder.findNumbers(row);

    //    cout << "ROW: " << row << "\n\tPicked Numbers: ";

        for(PartNumber part : parts){
            if(validator.isValid(r, part)){
                cout << part.partNumber << ", ";
                totalPartNumber += atoi(part.partNumber.c_str());
            }
        }

        cout << "\n";
    }

    cout << "\nTotal parts: " << totalPartNumber << "\n";
}