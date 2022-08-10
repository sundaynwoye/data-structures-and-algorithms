/**
* String Manipulation
*/


/*---------Reverse String---------*/
const reverseString = (s) => {
    return s.reverse();
};

console.log(reverseString(["h","e","l","l","o"]));


/*--------Valid Palindrome--------*/
const isPalindrome = (s) => {
    let cleanStr = cleanUp(s);

    return isPal(cleanStr);
}

function cleanUp(str) {
    let char = "abcdefghijklmnopqrstuvwxyz0123456789";

    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        let lCase = str[i].toLowerCase();

        if (char.indexOf(lCase) !== -1) {
            newStr += lCase;
        }
    }
    return newStr;
}

function isPal(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: panama"));


/*---------Detect Capital--------*/
const detectCapitalUse = (word) => {
    let capitalCount = 0;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (char === char.toUpperCase()) {
            capitalCount += 1;
        }
    }

    return (
        capitalCount === word.length ||
        capitalCount === 0 ||
        (word[0] === word[0].toUpperCase() && capitalCount === 1)
    )
}

console.log(detectCapitalUse('leetcode'));


/*---------Reverse Word in a String lll----------*/
const reverseWords = (s) => {
    let word = s.split(" ");
    let reverseWord = word.map(elem => elem.split("").reverse().join(""));
    return reverseWord.join(" ");
}

console.log(reverseWords("Let's take Leetcode contest"));


/*-----------Reverse Vowels-------------*/
const reverseVowels = (s) => {
    const vowels = {}; // {a: true, A: true, e: true}
    for (const char of "aeiouAEIOU") {
        vowels[char] = true;
    }

    const characters = s.split("");

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !(s[left] in vowels)) {
            left += 1;
        }

        while (left < right && !(s[right] in vowels)) {
            right -= 1;
        }

        swap(characters, left, right);
        left += 1;
        right -= 1;
    }

    return characters.join("");
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(reverseVowels("leetcode"));


/*-----------Longest Common Prefix---------------*/
const longestCommonPrefix = (strs) => {
    let longest = "";

    if (strs.length === 0) {
        return longest;
    }

    let comparisonWord = strs[0];
    let comparisonIndex = 0;

    for (let comparisonLetter of comparisonWord) {
        for (let i = 1; i < strs.length; i++) {
            let currentWord = strs[i];
            let currentLetter = currentWord.charAt(comparisonIndex);

            if (comparisonLetter !== currentLetter || comparisonIndex > currentWord.length) {
                return longest;
            }
        }
        comparisonIndex ++;
        longest += comparisonLetter;
    }

    return longest;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
