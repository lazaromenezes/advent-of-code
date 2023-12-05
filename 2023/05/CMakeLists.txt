find_package(GTest REQUIRED)

add_library(05_lib map-range.cpp parsing.cpp)

file(GLOB TEST_FILES CONFIGURE_DEPENDS ./*-tests.cpp)

add_executable(tests_05 ${TEST_FILES})
target_link_libraries(tests_05 05_lib aoclib2023 GTest::gtest_main)

add_executable(main_05 main.cpp)
target_link_libraries(main_05 05_lib aoclib2023)

add_custom_command(
    TARGET main_05 POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/05/input
            ${CMAKE_CURRENT_BINARY_DIR}/input
)

include(GoogleTest)

gtest_discover_tests(tests_05)
