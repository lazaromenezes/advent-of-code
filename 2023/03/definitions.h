#include <vector>
#include <string>
#include <iostream>
#include <regex>

using std::string;
using std::vector;

namespace aoc2023_03 {
    struct Point{
        int x, y;

        friend bool operator==(const Point& self, const Point& other){
            return other.x == self.x && other.y == self.y;
        }

        friend std::ostream& operator<<(std::ostream& stream, const Point& self){
            return stream << "{" << self.x << ", " << self.y << "}";
        }
    };

    struct PartNumber {
        string partNumber;
        long mapPosition;
    };

    typedef std::vector<Point> Boundary;
    typedef std::vector<PartNumber> Parts;
    typedef std::vector<std::string> Grid;

    bool gridHasPoint(Grid grid, int rowNum, Point point);

    const std::regex NUMBER_REGEX("(\\d{1,})");

    class NumberFinder {
        public:
            Parts findNumbers(string row);
    };

    class BoundaryCalculator{
        public:
            Boundary calculateBoundary(int rowNumber, string line, PartNumber partNumber);
    };

    class NumberValidator {
        private:
            Grid _grid;
            
        public:
            NumberValidator(Grid grid);
            
            bool isValid(int rowNumber, PartNumber partNumber);
    };
}