type LocationId = Array<number> 

export function parse(data: String): Array<LocationId> {
    const lines = data.split("\n")

    const left: number[] = [], right: number[] = []

    lines.forEach(line => {
        if (line) {
            const split = line.split(" ")
            if(split){
                left.push(parseInt(split[0]))
                right.push(parseInt(split[split.length - 1]))
            }
        }
    })

    return [left.sort(), right.sort()]
}

export function calculateDifference(left: LocationId, right: LocationId) {
    return left.map((val, idx) => Math.abs(val - right[idx]))
}