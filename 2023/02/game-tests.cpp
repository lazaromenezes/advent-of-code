#include "models.h"

#include <gtest/gtest.h>
#include <string>

using aoc2023_02::Game;
using aoc2023_02::Bag;

using std::string;

namespace aoc2023_02_tests {
    TEST(GAME, test_fromString_can_create_game_with_its_id){
        string gameString = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";

        Game game = Game::fromString(gameString);

        EXPECT_EQ(1, game.id);
    }

    TEST(GAME, test_fromString_can_create_game_with_big_id){
        string gameString = "Game 100: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";

        Game game = Game::fromString(gameString);

        EXPECT_EQ(100, game.id);
    }

    TEST(GAME, test_fromString_can_create_game_draws){
        string gameString = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";

        Game game = Game::fromString(gameString);

        EXPECT_EQ(3, game.draws.size());
    }

    TEST(GAME, test_fromString_can_create_game_draws_properly){
        string gameString = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";

        Game game = Game::fromString(gameString);

        EXPECT_EQ(4, game.draws[0].red);
        EXPECT_EQ(3, game.draws[0].blue);

        EXPECT_EQ(1, game.draws[1].red);
        EXPECT_EQ(2, game.draws[1].green);
        EXPECT_EQ(6, game.draws[1].blue);

        EXPECT_EQ(2, game.draws[2].green);
    }

    TEST(GAME, is_valid_if_all_draws_fit_in_bag){
        string gameString = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";

        Bag bag{10, 10, 10};
        Game game = Game::fromString(gameString);

        EXPECT_TRUE(game.isValid(bag));
    }

    TEST(GAME, is_not_valid_any_draws_does_not_fit_in_bag){
        string gameString = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";

        Bag bag{3, 10, 10};
        Game game = Game::fromString(gameString);

        EXPECT_FALSE(game.isValid(bag));
    }

    TEST(GAME, min_required_power_is_the_power_of_the_min_amount_for_each_picked_color){
        string gameString = "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue";

        Game game = Game::fromString(gameString);

        EXPECT_EQ(12, game.minRequiredPower());
    }
}