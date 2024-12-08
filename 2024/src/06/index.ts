import { firstSolution, secondSolution } from "./solution"

function main(){
    var filePath = process.argv[2]
    
    firstSolution(filePath).then(result => {
        console.log(`Visited places: ${result}`)
    })

    secondSolution(filePath).then(result => {
        console.log(`Block places: ${result}`)
    })

}

main()
