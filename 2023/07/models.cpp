#include "definitions.h"
#include <unordered_map>
#include <iostream>
#include <algorithm>

namespace aoc2023_07{
    typedef std::pair<char, int> CardCount;
    
    HandType Hand::type() const{ 
        std::unordered_map<char, int> counts = {};
        
        for(auto card : cards)
            counts[card] += 1;

        if(counts.size() == 1)
            return HandType::FIVE_OF;
        
        std::vector<CardCount> countVector(counts.begin(), counts.end());

        auto sortByCountDesc = [](const CardCount &a, const CardCount &b) {
            return a.second > b.second;
        };

        std::sort(countVector.begin(), countVector.end(), sortByCountDesc);

        std::unordered_map<char, int> remaped(countVector.begin(), countVector.end());
        
        auto replaceJokers = [](std::unordered_map<char, int>& aMap){
            std::unordered_map<char, int> newMap;
            
            for(auto pair : aMap)
                if(pair.first != 'J') 
                    newMap[pair.first] = pair.second;

            newMap.begin()->second += aMap['J'];

            return newMap;
        };

        remaped = replaceJokers(remaped);

        if(remaped.size() == 1)
            return HandType::FIVE_OF;

        if(remaped.size() == 2)
            return remaped.cbegin()->second == 4 ? HandType::FOUR_OF : HandType::FULL_HOUSE;

        if(remaped.size() == 3)
            return remaped.cbegin()->second == 3 ? HandType::THREE_OF : HandType::TWO_PAIR;

        return remaped.size() == 4 ? HandType::ONE_PAIR : HandType::HIGH;
    }

    bool Hand::operator<(const Hand& other) const{
            if(type() < other.type())
                return true;

            if(type() > other.type())
                return false;

            for(int i = 0; i < cards.size(); i++)
                if(cards[i] != other.cards[i])
                    return CARD_ORDER.find(cards[i]) < CARD_ORDER.find(other.cards[i]);

            return false;
    }

    Hand Hand::fromString(std::string str){
        auto cards = str.substr(0, 5);
        auto bid = atoi(str.substr(6).c_str());

        return {.cards = cards, .bid = bid};
    }
}