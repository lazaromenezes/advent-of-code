find_package(GTest REQUIRED)

add_library(07_lib models.cpp)

file(GLOB TEST_FILES CONFIGURE_DEPENDS ./*-tests.cpp)

add_executable(tests_07 ${TEST_FILES})
target_link_libraries(tests_07 07_lib aoclib2023 GTest::gtest_main)

add_executable(main_07 main.cpp)
target_link_libraries(main_07 07_lib aoclib2023)

add_custom_command(
    TARGET main_07 POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/07/input
            ${CMAKE_CURRENT_BINARY_DIR}/input
)

include(GoogleTest)

gtest_discover_tests(tests_07)
