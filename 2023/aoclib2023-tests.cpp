#include <gtest/gtest.h>
#include <gmock/gmock.h>
#include "aoclib2023.h"

namespace aoclib2023_tests {
    TEST(SPLIT, string_with_no_delimiter_returns_itself){
        const std::string TARGET = "asdfgh";
        const char DELIMITER = ';';

        auto result = aoclib2023::split(TARGET, DELIMITER);

        ASSERT_EQ(1, result.size());
        ASSERT_EQ(TARGET, result[0]);
    }

    TEST(SPLIT, string_with_delimiter_returns_two_pieces){
        const std::string TARGET = "asd;fgh";
        const char DELIMITER = ';';

        auto result = aoclib2023::split(TARGET, DELIMITER);

        ASSERT_EQ(2, result.size());
        ASSERT_EQ("asd", result[0]);
        ASSERT_EQ("fgh", result[1]);
    }

    TEST(SPLIT, string_with_delimiter_returns_two_pieces_different_delimiter){
        const std::string TARGET = "asd fgh";
        const char DELIMITER = ' ';

        auto result = aoclib2023::split(TARGET, DELIMITER);

        ASSERT_EQ(2, result.size());
        ASSERT_EQ("asd", result[0]);
        ASSERT_EQ("fgh", result[1]);
    }
}