import { firstSolution, firstSolutionV3, secondSolution } from "./solution"

function main(){
    var filePath = process.argv[2]
    
    firstSolution(filePath).then(result => {
        console.log(`Total stones after 25 blinks: ${result}`)

        firstSolutionV3(filePath).then(res => {
            console.log(`Total stones after 25 blinks (V3): ${res}`)
        })
    })

    secondSolution(filePath).then(result => {
        console.log(`Total stones after 75 blinks: ${result}`)
    })
}

main()
