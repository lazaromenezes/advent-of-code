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
        string line;
        aoc2023_07::Hands hands;

        while(getline(inputFile, line))
            hands.push_back(aoc2023_07::Hand::fromString(line));

        std::sort(hands.begin(), hands.end());
        
        long winnings = 0;
        int i = 0;

        for(auto hand : hands){
            winnings += hand.bid * ++i;
        }

        cout << "Winnings: " << winnings << "\n";
    });
};
