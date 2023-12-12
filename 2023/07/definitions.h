#include <vector>
#include <string>
#include <vector>
#include <map>

namespace aoc2023_07 {
    enum struct HandType : short {FIVE_OF = 6, FOUR_OF = 5, FULL_HOUSE = 4, THREE_OF = 3, TWO_PAIR = 2, ONE_PAIR = 1, HIGH = 0};
    const std::string CARD_ORDER = "23456789TJQKA";

    struct Hand{
        std::string cards;
        int bid;

        HandType type() const;
        static Hand fromString(std::string str);
        bool operator<(const Hand& other) const;
    };

    typedef std::vector<Hand> Hands;
}