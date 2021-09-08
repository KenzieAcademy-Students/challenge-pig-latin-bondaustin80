// Your code here

//Basic

function vowelToPigLatin(word) {
    let pigWord = word + "-yay"
    return pigWord
}

console.assert(
    vowelToPigLatin("eat") === "eat-yay",
    "vowelToPigLatin does not return the correct value"
)

console.assert(
    vowelToPigLatin("uncle") === "uncle-yay",
    "vowelToPigLatin does not return the correct value"
)

function consonantToPigLatin(word) {
    let consGroup = ""
    let vowelsGroup = ""
    let pigWord = ""
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i).toLowerCase() === "a" || word.charAt(i).toLowerCase() === "e" || word.charAt(i).toLowerCase() === "i" || word.charAt(i).toLowerCase() === "o" || word.charAt(i).toLowerCase() === "u") {
            vowelsGroup = word.substring(i)
            pigWord = vowelsGroup + "-" + consGroup + "ay"
            break
        } else {
            consGroup = consGroup + word.charAt(i)
        }
    }
    if (pigWord === "") {
        pigWord = consGroup + "ay"
    }
    return pigWord
}

console.assert(
    consonantToPigLatin("hello") === "ello-hay",
    "consonantToPigLatin does not return correct value word if word starts with 1 consonant"
)

console.assert(
    consonantToPigLatin("cheese") === "eese-chay",
    "consonantToPigLatin does not return corrent value word if word starts with 2 or more consonants"
)

function startWithChar(word) {
    if (word.charAt(0).toLowerCase() === "a" || word.charAt(0).toLowerCase() === "e" || word.charAt(0).toLowerCase() === "i" || word.charAt(0).toLowerCase() === "o" || word.charAt(0).toLowerCase() === "u") {
        return vowelToPigLatin(word)
    } else {
        return consonantToPigLatin(word)
    }
}

console.assert(
    startWithChar("hello") === "ello-hay",
    "startWithChar does not call correct function if word starts with a consonant"
)

console.assert(
    startWithChar("eat") === "eat-yay",
    "startWithChar does not call correct function if word starts with a vowel"
)

function sentenceToPigLatin(string) {
    if (string === "") {
        return ""
    }
    let array = string.split(" ")
    let punctuation
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "") {
            array[i] = ""
        } else if (array[i].includes(".") || array[i].includes(",") || array[i].includes("!") || array[i].includes("?")) {
            punctuation = array[i].substring(array[i].length - 1)
            array[i] = startWithChar(array[i].substring(0, array[i].length - 1)) + punctuation
        } else {
            array[i] = startWithChar(array[i])
        }
    }
    let newString = array.join(" ")
    return newString
}

console.assert(
    sentenceToPigLatin("Hello, my name is Austin.") === "ello-Hay, my-ay ame-nay is-yay Austin-yay.",
    "sentenceToPigLatin does not return correct string"
)

console.assert(
    sentenceToPigLatin("One cheeseburger please") === "One-yay eeseburger-chay ease-play",
    "sentenceToPigLatin does not return correct string"
)

//Intermediate

let english = document.createElement("textarea")
english.setAttribute("id", "english")

document.body.append(english)

let englishResult = document.createElement("p")

document.body.append(englishResult)

function analyzeEnglish() {
    let result = sentenceToPigLatin(english.value)
    englishResult.innerText = result
}

document.getElementById("english").addEventListener("keyup", analyzeEnglish)

document.getElementById("english").addEventListener("change", analyzeEnglish)