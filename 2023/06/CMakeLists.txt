find_package(GTest REQUIRED)

add_library(06_lib models.cpp)

file(GLOB TEST_FILES CONFIGURE_DEPENDS ./*-tests.cpp)

add_executable(tests_06 ${TEST_FILES})
target_link_libraries(tests_06 06_lib aoclib2023 GTest::gtest_main)

add_executable(main_06 main.cpp)
target_link_libraries(main_06 06_lib aoclib2023)

add_custom_command(
    TARGET main_06 POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/06/input
            ${CMAKE_CURRENT_BINARY_DIR}/input
)

include(GoogleTest)

gtest_discover_tests(tests_06)
