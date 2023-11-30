find_package(GTest REQUIRED)

add_executable(counter counter.test.cpp)

target_link_libraries(counter GTest::gtest_main)

include(GoogleTest)

gtest_discover_tests(counter)
