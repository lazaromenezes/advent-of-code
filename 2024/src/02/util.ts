type Level = number
type Report = Level[]
type Difference = number

import { NEW_LINE, SPACE } from "../core";

export function parse(data: string) : Report[]{
    return data.trim().split(NEW_LINE).map(r => r.trim().split(SPACE).map(l => parseInt(l)))
}

export function calculateReport(report: Report) : Difference[] {
    
    var differences: Difference[] = []
    
    report.forEach((level, index) => {
        if(index + 1 < report.length) 
            differences.push(report[index + 1] - level)
    })

    return differences
}

export function isSafe(differences: Difference[]) {
    let safe = differences.every(d => d < 0) || differences.every(d => d > 0)
    safe = safe && differences.every(d => Math.abs(d) <= 3)

    return  safe
}