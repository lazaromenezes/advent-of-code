#include <iostream>
#include <fstream>
#include <string>
#include "definitions.h"
#include "../aoclib2023.h"

using aoc2023_04::Scratchcards;
using aoc2023_04::Scratchcard;

using std::getline;
using std::cout;

int calculateByCount(Scratchcards& cards) {
    int totalCards = 0;

    for(Scratchcard& card : cards) {
        int nmatches = card.nmatches();
        for(int i = 0; i < nmatches; i++){
            Scratchcard& next = cards[card.id + i];
            next.amount += card.amount;
        }

        totalCards += card.amount;
    }

    return totalCards;
}

int main(int argc, char *argv[]) {
    aoclib2023::withInput(argc, argv, [](std::ifstream& inputFile){
        int totalPoints = 0;

        Scratchcards originalCards;

        string line;

        while(getline(inputFile, line)){
            Scratchcard card = Scratchcard::fromString(line);
            originalCards.emplace_back(card);
            totalPoints += card.points();
        };

        cout << "\nTotal points: " << totalPoints << "\n";
        cout << "Added cards: " << calculateByCount(originalCards) << "\n";
    });
};
