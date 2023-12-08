#include <string>
#include <vector>
#include <fstream>

namespace aoclib2023 {
    std::vector<std::string> split(std::string string, char delimiter);
    void withInput(int argc, char* argv[], void (*findSolution)(std::ifstream&));
}