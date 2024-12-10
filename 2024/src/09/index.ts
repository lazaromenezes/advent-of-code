import { firstSolution, secondSolution } from "./solution"

function main(){
    var filePath = process.argv[2]
    
    firstSolution(filePath).then(result => {
        console.log(`Checksum: ${result}`)
    })

    secondSolution(filePath).then(result => {
        console.log(`New Checksum: ${result}`)
    })

}

main()
