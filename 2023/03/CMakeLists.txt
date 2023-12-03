find_package(GTest REQUIRED)

add_library(03_lib number-finder.cpp boundary-calculator.cpp number-validator.cpp definitions.cpp)

file(GLOB TEST_FILES CONFIGURE_DEPENDS ./*-tests.cpp)

add_executable(tests_03 ${TEST_FILES})
target_link_libraries(tests_03 03_lib GTest::gtest_main)

add_executable(main_03 main.cpp)
target_link_libraries(main_03 03_lib)

add_custom_command(
    TARGET main_03 POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/03/input
            ${CMAKE_CURRENT_BINARY_DIR}/input
)

include(GoogleTest)

gtest_discover_tests(tests_03)
