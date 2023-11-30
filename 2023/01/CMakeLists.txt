find_package(GTest REQUIRED)

add_library(number-finder number-finder.cpp)
add_executable(number-finder-tests number-finder-tests.cpp)

target_link_libraries(number-finder-tests number-finder GTest::gtest_main)

include(GoogleTest)

gtest_discover_tests(number-finder-tests)
