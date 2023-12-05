#include "definitions.h"
#include "../aoclib2023.h"
#include <iostream>

namespace aoc2023_05 {
    MapRange MapRange::fromString(std::string str){
        auto items = aoclib2023::split(str, SPACE);

        return MapRange{
            .destinationStart = atol(items[0].c_str()), 
            .sourceStart = atol(items[1].c_str()),
            .range = atol(items[2].c_str())
        };
    }

    long MapRange::map(long source){
        if(source < sourceStart || source > sourceStart + range)
            return source;

        return destinationStart + source - sourceStart;
    }

    long mapDestination(Map map, long source){
        for(MapRange range : map) {
            long dest = range.map(source);
            if(dest != source)
                return dest;
        }
            
        return source;
    }
}