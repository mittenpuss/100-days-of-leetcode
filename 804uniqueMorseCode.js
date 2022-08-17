// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.


const uniqueMorseRepresentations =(words)=> {
    let morse = {
        a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f:"..-.", g:"--.", h:"....", i:"..", j: ".---", k:"-.-", l:".-..", m:"--",
        n:"-.", o:"---", p:".--.", q:"--.-", r:".-.", s:"...", t:"-", u:"..-", v:"...-", w:".--", x:"-..-", y:"-.--", z:"--.."
    }
    let newArray = []
    let arrayTemp = []

    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            // console.log(words[i][j])
            arrayTemp += morse[words[i][j]]
            // console.log(arrayTemp)
        }
        newArray.push(arrayTemp)
        arrayTemp = []

        // newArray.push(morse['a'])
        // console.log(morse['a'])
    }

    return new Set(newArray).size

    // return newArray

};


console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]))
console.log(uniqueMorseRepresentations(["a"]))
