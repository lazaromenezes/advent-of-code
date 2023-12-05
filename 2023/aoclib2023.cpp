#include "aoclib2023.h"
#include <iostream>

namespace aoclib2023 {
    std::vector<std::string> split(std::string str, char delimiter){
        std::vector<std::string> items = {};
        
        do{
            size_t pos = str.find(delimiter);

            if(pos == std::string::npos){
                items.emplace_back(str);
                return items;
            }

            std::string sub = str.substr(0, pos);
            items.emplace_back(sub);
            str = str.substr(++pos, std::string::npos);
        }while(true);

        return items;
    }
}