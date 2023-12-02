#include <iostream>
#include <fstream>
#include <string>

#include "number-finder.h"
#include "replacer.h"

using std::cout;
using std::getline;
using aoc2023_01::number_finder;
using aoc2023_01::replacer;

int main(int argc, char *argv[]) {
    auto inputFilePath = argc == 1 ? "./input" : argv[1];
    
    std::ifstream inputFile(inputFilePath, std::ifstream::in);

    number_finder finder = number_finder();
    replacer replacerObj = replacer();

    int totalOnlyDigits, totalWithLiterals = 0;

    string line;

    while(getline(inputFile, line)){
        totalOnlyDigits += finder.findNumber(line);
        line = replacerObj.replaceNumbers(line);
        cout << line << "\n";
        totalWithLiterals += finder.findNumber(line);
    }

    inputFile.close();

    cout << "\n" 
         << "Total only digits: " 
         << totalOnlyDigits 
         << "\n" 
         << "Total with literals: " 
         << totalWithLiterals << 
         "\n";
}