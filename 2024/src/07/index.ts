import { firstSolution, secondSolution } from "./solution"

function main(){
    var filePath = process.argv[2]
    
    firstSolution(filePath).then(result => {
        console.log(`Value: ${result}`)
    })

    secondSolution(filePath).then(result => {
        console.log(`Value with concat: ${result}`)
    })
}

main()