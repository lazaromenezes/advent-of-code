#include <iostream>
#include <fstream>
#include <string>

#include "number-finder.h"

using std::cout;
using std::getline;
using aoc2023_01::number_finder;

int main() {
    std::ifstream inputFile("./input", std::ifstream::in);

    number_finder finder = number_finder();

    cout << "Checking input\n";

    int total = 0;

    string line;

    while(getline(inputFile, line)){
        total += finder.findNumber(line);
    }

    inputFile.close();

    cout << total << "\n";
}