#include <gtest/gtest.h>

namespace {
  TEST(NewTest, Fail) {
    EXPECT_EQ(1, 0);
  }
}
