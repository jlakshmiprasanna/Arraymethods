// Question-1   (count the number)

function countWords(arr) {
    let wordCount = {};

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    return wordCount;
}

let words = ["apple", "banana", "apple", "orange", "banana", "apple"];
let result = countWords(words);
console.log(result);                                             // Ouput:-----      { apple: 3, banana: 2, orange: 1 }



// Question-2   (vowels)

function findVowelsInEachWord(arr){
    const vowels = "aeiou";
    count = {};
    for(i=0; i < arr.length; i++){
        let convertedWords = arr[i]?.toLowerCase();
        let num = 0;
            for(j = 0; j < convertedWords.length; j++){
                let letter = convertedWords[j];
                for(k=0;k < vowels.length;k++){
                    if(convertedWords[j] == vowels[k]){
                        if(letter === vowels[k]){
                        num ++;
                    }
                }
            }
            }
            count[arr[i]] = num
        }
        return count
    }

const words1 = ["Prasanna","Chandana","Ahalya"];
const output1 = findVowelsInEachWord(words1)
console.log(output1)                                             // Output :-----    { Prasanna: 3, Chandana: 3, Ahalya: 3 }



// Question-3   (consonants)


function findVowelsInEachWord(arr){
    const vowels = "aeiou";
    obj = {};
    consonants = {};
     
    for(i=0; i < arr.length; i++){
        let convertedWords = arr[i].toLowerCase();
        let count = 0;
        let num = 0;
            for(j = 0; j < convertedWords.length; j++){
                for(k=0;k < vowels.length;k++){
                    if(convertedWords[j] == vowels[k]){
                        count ++;
                    }else{
                        num ++
                    }
                }
            }
            obj[arr[i]] = count
            consonants[arr[i]] = num
        }
        return {obj,consonants};
    }

const words2 = ["Prasanna","Chandana","Ahalya"];
const output2 = findVowelsInEachWord(words2)
console.log(output2)                                         // Output :-----      { obj: { Prasanna: 3, Chandana: 3, Ahalya: 3 },constants: { Prasanna: 37, Chandana: 37, Ahalya: 27 }}