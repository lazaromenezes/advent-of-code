cmake_minimum_required(VERSION 3.22.1)

project(advent_of_code_2023)

set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(GTest REQUIRED)

enable_testing()

add_library(aoclib2023 STATIC aoclib2023.cpp)

add_executable(aoclib2023_tests aoclib2023-tests.cpp)
target_link_libraries(aoclib2023_tests aoclib2023 GTest::gtest_main)

add_subdirectory(01)
add_subdirectory(02)
add_subdirectory(03)
add_subdirectory(04)
