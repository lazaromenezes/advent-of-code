find_package(GTest REQUIRED)

add_library(08_lib models.cpp)

file(GLOB TEST_FILES CONFIGURE_DEPENDS ./*-tests.cpp)

add_executable(tests_08 ${TEST_FILES})
target_link_libraries(tests_08 08_lib aoclib2023 GTest::gtest_main)

add_executable(main_08 main.cpp)
target_link_libraries(main_08 08_lib aoclib2023)

add_custom_command(
    TARGET main_08 POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/08/input
            ${CMAKE_CURRENT_BINARY_DIR}/input
)

include(GoogleTest)

gtest_discover_tests(tests_08)
