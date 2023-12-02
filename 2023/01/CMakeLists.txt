find_package(GTest REQUIRED)

add_library(number-finder number-finder.cpp)
add_library(replacer replacer.cpp)

add_executable(tests number-finder-tests.cpp replacer-tests.cpp)
target_link_libraries(tests number-finder replacer GTest::gtest_main)

add_executable(main main.cpp)
target_link_libraries(main number-finder replacer)
add_custom_command(
    TARGET main POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/01/input
            ${CMAKE_CURRENT_BINARY_DIR}/input
)

include(GoogleTest)

gtest_discover_tests(tests)
