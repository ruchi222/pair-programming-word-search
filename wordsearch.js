const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
const transposed = letters[0].map((item, index) => letters.map(row => row[index]))
    const verticalJoin = transposed.map(ls => ls.join(''))
    for (v of verticalJoin) {
        if (v.includes(word))
        return true;
    }
    return false;
} 
// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found
module.exports = wordSearch;
