find_package(GTest REQUIRED)

add_executable(new_test new_test.cpp)

target_link_libraries(new_test GTest::gtest_main)

include(GoogleTest)

gtest_discover_tests(new_test)
