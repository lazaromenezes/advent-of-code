#include <vector>
#include <string>
#include <vector>
#include <map>

namespace aoc2023_08 {
    class NavigationInstructions {
        private:
            std::string _instructions;
            int _current;
            int _totalInstructions;

        public: 
            NavigationInstructions(std::string instructions){
                _instructions = instructions;
                _totalInstructions = _instructions.size();
                _current = 0;
            }
            char next();
    };
}