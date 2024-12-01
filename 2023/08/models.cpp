#include "definitions.h"

namespace aoc2023_08 {
    char NavigationInstructions::next(){
        return _instructions[_current++ % _totalInstructions];
    }
}