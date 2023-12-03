#include "definitions.h"

namespace aoc2023_03 {
    Boundary BoundaryCalculator::calculateBoundary(int rowNumber, string row, PartNumber part) {
        int targetPos = row.find(part.partNumber, part.mapPosition);
        int size = part.partNumber.size();

        int previousRow = rowNumber - 1;
        int nextRow = rowNumber + 1;

        int before = targetPos - 1;
        int after = targetPos + size;

        Boundary boundary = {{previousRow, before}, {rowNumber, before}, {nextRow, before}, {rowNumber, after}};

        for(int i = 0; i <= size; i++){
            boundary.emplace_back(Point{previousRow, targetPos + i});
            boundary.emplace_back(Point{nextRow, targetPos + i});
        };

        return boundary;
    }
}