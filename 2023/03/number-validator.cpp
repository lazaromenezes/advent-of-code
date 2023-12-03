#include "definitions.h"

namespace aoc2023_03 {
    const char PERIOD = '.';
    const std::regex IS_SYMBOL("([^\\d.])");

    using std::regex_match;

    NumberValidator::NumberValidator(Grid grid){
        _grid = grid;
    };
            
    bool NumberValidator::isValid(int rowNumber, PartNumber part){
        BoundaryCalculator calculator = BoundaryCalculator();

        string row = _grid[rowNumber];

        Boundary boundary = calculator.calculateBoundary(rowNumber, row, part);

        for(Point p : boundary)
            if(gridHasPoint(_grid, rowNumber, p) && regex_match(string(1, _grid[p.x][p.y]), IS_SYMBOL))
                return true;

        return false;
    }
}