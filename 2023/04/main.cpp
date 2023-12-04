#include <iostream>
#include <fstream>
#include <string>
#include "definitions.h"

using aoc2023_04::Scratchcards;
using aoc2023_04::Scratchcard;

using std::getline;
using std::cout;

int calculateCards(Scratchcards cards, const Scratchcards initialSet) {
    int totalCards = cards.size();

    for(Scratchcard card : cards) {
        //cout << "Checking card #" << card.id << "\n";
        int nmatches = card.nmatches();
        
        Scratchcards copies = {};

        for(int i = 0; i < nmatches; i++)
            copies.emplace_back(initialSet[card.id + i]);

        totalCards += calculateCards(copies, initialSet);
    }

    return totalCards;
}

int main(int argc, char *argv[]) {
    auto inputFilePath = argc == 1 ? "./input" : argv[1];
    
    std::ifstream inputFile(inputFilePath, std::ifstream::in);

    int totalPoints = 0;

    Scratchcards originalCards;

    string line;

    while(getline(inputFile, line)){
        Scratchcard card = Scratchcard::fromString(line);
        originalCards.emplace_back(card);
        totalPoints += card.points();
    };

    cout << "\nTotal points: " << totalPoints << "\n";
    cout << "Added cards: " << calculateCards(originalCards, originalCards) << "\n";

    inputFile.close();
};
