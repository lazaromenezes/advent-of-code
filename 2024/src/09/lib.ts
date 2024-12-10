import { EMPTY, PERIOD } from "../core"

type Block = number | null
type Disk = Block[]
type ScanResult = {files: number[], spaces: number[]}

export function calculateChecksum(blocks: Disk): number {
    const fixed = blocks.map(b => b || 0)

    return fixed.reduce((checksum, value, index) => checksum += value * index)
}

export function scanDisk(input: string) {
    const fragmentedDisk = input.toString().split(EMPTY).map(v => parseInt(v))

    const files: number[] = []
    const spaces: number[] = []

    fragmentedDisk.forEach((value, index) => {
        if(index % 2 === 0)
            files.push(value)
        else
            spaces.push(value)
    })

    return {files, spaces}
}

export function expandDisk(scanResult: ScanResult): Disk {
    const {files, spaces} = scanResult

    const expandedDisk: Disk = []
    
    files.forEach((fileSize, fileId) => {
        expandedDisk.push(...(new Array<Block>(fileSize).fill(fileId)))
        
        if(fileId in spaces) {
            const blankSpace = spaces[fileId]
            expandedDisk.push(...(new Array<Block>(blankSpace).fill(null)))
        }
    })

    return expandedDisk
}

export function defragment(disk: Disk): Disk {
    const contiguosDisk = [...disk]
    const nonNull = disk.filter(b => b !== null)

    contiguosDisk.forEach((block, index, self) => {
        if(self.slice(index).some(b => b !== null) && block === null){
            const fileBlock = nonNull.pop()
            const position = self.lastIndexOf(fileBlock!)
            self[position] = null
            self[index] = fileBlock!
        }
    })

    return contiguosDisk
}

export function defragmentV2(disk: Disk, scanResult: ScanResult): Disk {
    const {files, spaces} = scanResult

    const contiguosDisk = [...disk]

    for(let fileId = files.length - 1; fileId > 0; fileId--){
        const fileSize = files[fileId]

        let scanIndex = 0
        
        do{
            var spaceSize = 0
            var spaceIndex = contiguosDisk.indexOf(null, scanIndex)

            do{
                spaceSize += 1
            }while(contiguosDisk[spaceIndex + spaceSize] === null)    

            scanIndex += spaceSize   

        }while(scanIndex <= contiguosDisk.length && spaceSize < fileSize)

        if(spaceIndex > 0){
            for(let b = spaceIndex; b < spaceIndex + files[fileId]; b++){
                contiguosDisk[b] = fileId
                contiguosDisk[contiguosDisk.lastIndexOf(fileId)] = null
            }
        }
    }

    return contiguosDisk
}