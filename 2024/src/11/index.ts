import { firstSolution, secondSolution } from "./solution"

function main(){
    var filePath = process.argv[2]
    
    firstSolution(filePath).then(result => {
        console.log(`Total stones after 25 blinks: ${result}`)
    })

    secondSolution(filePath).then(result => {
        console.log(`Total stones after 25 blinks: ${result}`)
    })
}

main()
