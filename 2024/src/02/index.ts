import { firstSolution, secondSolution } from "./solution"

function main(){
    var filePath = process.argv[2]
    firstSolution(filePath).then(result => {
        console.log(`Total Safe Reports: ${result}`)
    })
    secondSolution(filePath).then(result => {
        console.log(`Total Safe Reports with Dampener: ${result}`)
    })
}

main()
