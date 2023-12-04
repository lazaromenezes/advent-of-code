find_package(GTest REQUIRED)

add_library(04_lib scratchcard.cpp)

file(GLOB TEST_FILES CONFIGURE_DEPENDS ./*-tests.cpp)

add_executable(tests_04 ${TEST_FILES})
target_link_libraries(tests_04 04_lib GTest::gtest_main)

add_executable(main_04 main.cpp)
target_link_libraries(main_04 04_lib)

add_custom_command(
    TARGET main_04 POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_SOURCE_DIR}/04/input
            ${CMAKE_CURRENT_BINARY_DIR}/input
)

include(GoogleTest)

gtest_discover_tests(tests_04)
