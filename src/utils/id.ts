const FIRST = 65 // "A" -> Ascii -> 65
const LAST = 90 // "Z" -> Ascii -> 90
const MAX_ALLOWED_DIGIT = 10
export const getNextId = (prevId: string): string => {
    // Function assumes, whatever prevId will be passed to it'll be a valid one.
    // Id is the combination of 2 letters and 2 digits
    // ie AA01 will be the first one.
    // Subsequent ids: AA02, AA03, AA04, ..., AB01, ..., AC01, ..., ZZ99
    // Starting from AA01 to ZZ99

    let firstChar = prevId.charCodeAt(0)
    let secondChar = prevId.charCodeAt(1)
    let num = prevId.slice(2)

    if (+num >= MAX_ALLOWED_DIGIT) {
        num = padWithLeadingZeros('1')
        secondChar += 1
        if (secondChar > LAST) {
            secondChar = FIRST
            firstChar += 1
            // Assuming, it'll never exceed ZZ + MAX_ALLOWED_DIGIT
            // Though Mathematically it's possible but ...
        }
    } else {
        num = padWithLeadingZeros(`${+num + 1}`)
    }

    return `${String.fromCharCode(firstChar)}${String.fromCharCode(
        secondChar
    )}${num}`
}

const padWithLeadingZeros = (num: string) => {
    const paddedNum = '00' + num
    return paddedNum.substring(paddedNum.length - 2)
}
