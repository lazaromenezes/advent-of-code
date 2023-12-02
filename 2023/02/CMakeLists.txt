find_package(GTest REQUIRED)

add_library(models models.cpp)

file(GLOB TEST_FILES CONFIGURE_DEPENDS ./*-tests.cpp)

add_executable(tests_02 ${TEST_FILES})
target_link_libraries(tests_02 models GTest::gtest_main)

add_executable(main_02 main.cpp)
target_link_libraries(main_02 models)

include(GoogleTest)

gtest_discover_tests(tests_02)
