const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false
    }

    const horizontalJoin = letters.map(row => row.join(''))
    // console.log(horizontalJoin)
    for (element of horizontalJoin) {
        if (element.includes(word)) {
            return true
        }
    }

    let verticalJoin = ''
    for (let x = 0; x < letters[0].length; x++) {
        for (let y = 0; y < letters.length; y++) {
            verticalJoin += letters[y][x];
        }
        if (verticalJoin.includes(word)) {
            return true
        }
    }
    return false
}


module.exports = wordSearch

wordSearch([], 'SEINFELD')

// console.log(wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'SEINFELD'))