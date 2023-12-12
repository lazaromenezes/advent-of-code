#include "definitions.h"
#include <unordered_map>
#include <iostream>

namespace aoc2023_07{
    HandType Hand::type() const{ 
        std::unordered_map<char, int> counts = {};
        
        for(auto card : cards)
            counts[card] += 1;
        
        if(counts.size() == 1)
            return HandType::FIVE_OF;

        if(counts.size() == 2){
            if(counts.cbegin()->second == 4 || counts.cbegin()->second == 1) {
                return HandType::FOUR_OF;
            } else {
                return HandType::FULL_HOUSE;
            }
        }

        if(counts.size() == 3){
            for(auto c : counts)
                if(c.second != 1)
                    return c.second == 3 ? HandType::THREE_OF : HandType::TWO_PAIR;
        }

        return counts.size() == 4 ? HandType::ONE_PAIR : HandType::HIGH;
    }

    bool Hand::operator<(const Hand& other) const{
            if(type() < other.type())
                return true;

            if(type() > other.type())
                return false;

            int i = 0;
            do {
                if(cards[i] != other.cards[i])
                    return CARD_ORDER.find(cards[i]) < CARD_ORDER.find(other.cards[i]);
                i++;
            }while(i < 5);

            return false;
    }

    Hand Hand::fromString(std::string str){
        
        auto cards = str.substr(0, 5);
        auto bid = atoi(str.substr(6).c_str());

        return {.cards = cards, .bid = bid};
    }
}