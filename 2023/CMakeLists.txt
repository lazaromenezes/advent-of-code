cmake_minimum_required(VERSION 3.22.1)

project(advent_of_code_2023)

set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(GTest REQUIRED)

enable_testing()

add_subdirectory(01)
