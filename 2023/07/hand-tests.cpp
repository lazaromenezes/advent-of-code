#include "gtest/gtest.h"
#include "gmock/gmock.h"
#include "definitions.h"

namespace aoc2023_07_tests {
    TEST(HAND_TYPE, type_is_five_of_a_kind){
        auto hand = aoc2023_07::Hand{.cards = "AAAAA"};

        ASSERT_EQ(aoc2023_07::HandType::FIVE_OF, hand.type());
    }

    TEST(HAND_TYPE, type_is_four_of_a_kind){
        auto hand = aoc2023_07::Hand{.cards = "AAAA2"};

        ASSERT_EQ(aoc2023_07::HandType::FOUR_OF, hand.type());
    }

    TEST(HAND_TYPE, type_is_four_of_a_kind_mixed){
        auto hand = aoc2023_07::Hand{.cards = "AA2AA"};

        ASSERT_EQ(aoc2023_07::HandType::FOUR_OF, hand.type());
    }

    TEST(HAND_TYPE, type_is_full_house){
        auto hand = aoc2023_07::Hand{.cards = "AAA22"};

        ASSERT_EQ(aoc2023_07::HandType::FULL_HOUSE, hand.type());
    }

    TEST(HAND_TYPE, type_is_full_house_mixed){
        auto hand = aoc2023_07::Hand{.cards = "A2A2A"};

        ASSERT_EQ(aoc2023_07::HandType::FULL_HOUSE, hand.type());
    }

    TEST(HAND_TYPE, type_is_highest_card_if_all_cards_are_different){
        auto hand = aoc2023_07::Hand{.cards = "A2345"};

        ASSERT_EQ(aoc2023_07::HandType::HIGH, hand.type());
    }

    TEST(HAND_TYPE, type_is_three_of_a_kind){
        auto hand = aoc2023_07::Hand{.cards = "AAA23"};

        ASSERT_EQ(aoc2023_07::HandType::THREE_OF, hand.type());
    }

    TEST(HAND_TYPE, type_is_three_of_a_kind_mixed){
        auto hand = aoc2023_07::Hand{.cards = "A2A3A"};

        ASSERT_EQ(aoc2023_07::HandType::THREE_OF, hand.type());
    }

    TEST(HAND_TYPE, type_is_three_of_a_kind_end){
        auto hand = aoc2023_07::Hand{.cards = "23AAA"};

        ASSERT_EQ(aoc2023_07::HandType::THREE_OF, hand.type());
    }

    TEST(HAND_TYPE, type_is_two_pair){
        auto hand = aoc2023_07::Hand{.cards = "AA223"};

        ASSERT_EQ(aoc2023_07::HandType::TWO_PAIR, hand.type());
    }

    TEST(HAND_TYPE, type_is_two_pair_mixed){
        auto hand = aoc2023_07::Hand{.cards = "A2A23"};

        ASSERT_EQ(aoc2023_07::HandType::TWO_PAIR, hand.type());
    }

    TEST(HAND_TYPE, type_is_two_pair_end){
        auto hand = aoc2023_07::Hand{.cards = "322AA"};

        ASSERT_EQ(aoc2023_07::HandType::TWO_PAIR, hand.type());
    }

    TEST(HAND_TYPE, type_is_two_pair_begin_end){
        auto hand = aoc2023_07::Hand{.cards = "A232A"};

        ASSERT_EQ(aoc2023_07::HandType::TWO_PAIR, hand.type());
    }

    TEST(HAND_TYPE, type_is_pair){
        auto hand = aoc2023_07::Hand{.cards = "AA234"};

        ASSERT_EQ(aoc2023_07::HandType::ONE_PAIR, hand.type());
    }

    TEST(HAND_TYPE, type_is_pair_mixed){
        auto hand = aoc2023_07::Hand{.cards = "A2A34"};

        ASSERT_EQ(aoc2023_07::HandType::ONE_PAIR, hand.type());
    }

    TEST(HAND_TYPE, type_is_pair_end){
        auto hand = aoc2023_07::Hand{.cards = "432AA"};

        ASSERT_EQ(aoc2023_07::HandType::ONE_PAIR, hand.type());
    }

    TEST(HAND_TYPE, type_is_pair_begin_end){
        auto hand = aoc2023_07::Hand{.cards = "A234A"};

        ASSERT_EQ(aoc2023_07::HandType::ONE_PAIR, hand.type());
    }

    TEST(HAND, high_car_is_less_than_pair){
        auto smallHand = aoc2023_07::Hand{.cards = "A2345"};
        auto bigHand = aoc2023_07::Hand{.cards = "A234A"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, pair_is_less_than_two_pair){
        auto smallHand = aoc2023_07::Hand{.cards = "A234A"};
        auto bigHand = aoc2023_07::Hand{.cards = "A232A"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, two_pair_is_less_than_three_of){
        auto smallHand = aoc2023_07::Hand{.cards = "A232A"};
        auto bigHand = aoc2023_07::Hand{.cards = "A23AA"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, three_of_is_less_than_full_house){
        auto smallHand = aoc2023_07::Hand{.cards = "A23AA"};
        auto bigHand = aoc2023_07::Hand{.cards = "A22AA"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, full_house_is_less_than_four_of){
        auto smallHand = aoc2023_07::Hand{.cards = "A22AA"};
        auto bigHand = aoc2023_07::Hand{.cards = "A2AAA"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, four_of_is_less_than_five_of){
        auto smallHand = aoc2023_07::Hand{.cards = "A2AAA"};
        auto bigHand = aoc2023_07::Hand{.cards = "AAAAA"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, same_hand_type_differs_by_first_card){
        auto smallHand = aoc2023_07::Hand{.cards = "23456"};
        auto bigHand = aoc2023_07::Hand{.cards = "34567"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, same_hand_type_differs_by_second_card){
        auto smallHand = aoc2023_07::Hand{.cards = "23456"};
        auto bigHand = aoc2023_07::Hand{.cards = "24567"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, same_hand_type_differs_by_third_card){
        auto smallHand = aoc2023_07::Hand{.cards = "23456"};
        auto bigHand = aoc2023_07::Hand{.cards = "23567"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, same_hand_type_differs_by_fourth_card){
        auto smallHand = aoc2023_07::Hand{.cards = "23456"};
        auto bigHand = aoc2023_07::Hand{.cards = "23467"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, same_hand_type_differs_by_fifth_card){
        auto smallHand = aoc2023_07::Hand{.cards = "23456"};
        auto bigHand = aoc2023_07::Hand{.cards = "23457"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, a_is_bigger_than_k){
        auto smallHand = aoc2023_07::Hand{.cards = "KKKKK"};
        auto bigHand = aoc2023_07::Hand{.cards = "AAAAA"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, k_is_bigger_than_q){
        auto smallHand = aoc2023_07::Hand{.cards = "QQQQQ"};
        auto bigHand = aoc2023_07::Hand{.cards = "KKKKK"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, q_is_bigger_than_j){
        auto smallHand = aoc2023_07::Hand{.cards = "JJJJJ"};
        auto bigHand = aoc2023_07::Hand{.cards = "QQQQQ"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, j_is_bigger_than_t){
        auto smallHand = aoc2023_07::Hand{.cards = "TTTTT"};
        auto bigHand = aoc2023_07::Hand{.cards = "JJJJJ"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, t_is_bigger_than_9){
        auto smallHand = aoc2023_07::Hand{.cards = "99999"};
        auto bigHand = aoc2023_07::Hand{.cards = "TTTTT"};

        ASSERT_TRUE(smallHand < bigHand);
    }

    TEST(HAND, can_create_from_string_properly){
        std::string handString = "KTJJT 220";

        auto hand = aoc2023_07::Hand::fromString(handString);

        ASSERT_EQ("KTJJT", hand.cards);
        ASSERT_EQ(220, hand.bid);
    }

    TEST(HAND, same_hand_type_reverse){
        auto smallHand = aoc2023_07::Hand{.cards = "KTJJT"};
        auto bigHand = aoc2023_07::Hand{.cards = "KK677"};

        ASSERT_FALSE(bigHand < smallHand);
    }
};
