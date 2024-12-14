import { firstSolution, secondSolution } from "./solution"

function main(){
    var filePath = process.argv[2]
    
    firstSolution(filePath).then(result => {
        console.log(`Total antinodes: ${result}`)
    })

    secondSolution(filePath).then(result => {
        console.log(`Updated total antinodes: ${result}`)
    })
}

main()