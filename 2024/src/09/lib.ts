import { EMPTY } from "../core"

type Block = number | null
type Disk = Block[]

export function calculateChecksum(blocks: number[]): number {
    return blocks.reduce((checksum, value, index) => checksum += value * index, 0)
}

export function expandDisk(input: string): Disk {
    const fragmentedDisk = input.toString().split(EMPTY).map(v => parseInt(v))

    const files: number[] = []
    const spaces: number[] = []

    fragmentedDisk.forEach((value, index) => {
        if(index % 2 === 0)
            files.push(value)
        else
            spaces.push(value)
    })

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