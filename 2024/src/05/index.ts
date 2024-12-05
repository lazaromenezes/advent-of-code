import { firstSolution } from "./solution"

function main(){
    var filePath = process.argv[2]
    
    firstSolution(filePath).then(result => {
        console.log(`Total: ${result}`)
    })

}

main()
