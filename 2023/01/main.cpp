#include <iostream>
#include <fstream>
#include <string>

#include "number-finder.h"
#include "replacer.h"

using std::cout;
using std::getline;
using aoc2023_01::number_finder;
using aoc2023_01::replacer;

int main() {
    std::ifstream inputFile("./input", std::ifstream::in);

    number_finder finder = number_finder();
    replacer replacerObj = replacer();

    cout << "Checking input\n";

    int total = 0;

    string line;

    while(getline(inputFile, line)){
        line = replacerObj.replaceNumbers(line);
        total += finder.findNumber(line);
    }

    inputFile.close();

    cout << total << "\n";
}