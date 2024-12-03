const mulRe = /mul\((\d{1,3}),(\d{1,3})\)/gm

const dontDoRe = /don't\(\)([\s\S])*?do\(\)/gm
const trailingDontRe = /don't\(\).*/gm

export function parse(data: string) : number[][]{
    const matches = data.matchAll(mulRe)
    const terms = []
    for(const match of matches){
        terms.push([parseInt(match[1]), parseInt(match[2])])
    }
    return terms
}

export function clean(data: string): string {
    let out = data

    for(const match of data.matchAll(dontDoRe)){
        out = out.replace(match[0].toString(), "")
    }

    if(out.match(trailingDontRe)){
        out = out.replace(trailingDontRe, "")
    }

    return out
}