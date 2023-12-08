find_package(GTest REQUIRED)

add_library(number-finder number-finder.cpp)
add_library(replacer replacer.cpp)

file(GLOB TEST_FILES CONFIGURE_DEPENDS ./*-tests.cpp)

add_executable(tests_01 ${TEST_FILES})
target_link_libraries(tests_01 number-finder aoclib2023 replacer GTest::gtest_main)

add_executable(main_01 main.cpp)
target_link_libraries(main_01 number-finder aoclib2023 replacer)
add_custom_command(
    TARGET main_01 POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/01/input
            ${CMAKE_CURRENT_BINARY_DIR}/input
)

include(GoogleTest)

gtest_discover_tests(tests_01)
