#include "definitions.h"

namespace aoc2023_03 {
    bool gridHasPoint(Grid grid, int rowNum, Point point){
        
        return point.x >= 0
            && point.y >= 0
            && point.x < grid.size()
            && point.y < grid[rowNum].size();
    }
}