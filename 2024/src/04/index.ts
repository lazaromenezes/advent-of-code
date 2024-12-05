import { firstSolution, secondSolution } from "./solution"

function main(){
    var filePath = process.argv[2]
    
    firstSolution(filePath).then(result => {
        console.log(`Total XMAS: ${result}`)
    })

    secondSolution(filePath).then(result => {
        console.log(`Total X-MAS: ${result}`)
    })
    
}

main()
