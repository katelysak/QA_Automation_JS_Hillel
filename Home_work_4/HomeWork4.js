/*
реалізувати реверс стрінги (вивод в зворотньому порядку)
example:
reverse("Ihor") => "rohI"
*/

const reverseMyString = function(wordPassed){
    return wordPassed.split('').reverse().join('');
}

console.log(reverseMyString('Ihor'))
console.log(reverseMyString('Apple'))
console.log(reverseMyString('Lesson'))

/*
реалізувати функцію поліндром (коли в обидва боки одинакова стрінга)
example:
isPolidrom("aba") => true
isPolidrom("abc") => false
*/

const isPalindrome = function(wordPassed){
    if (wordPassed == '') {
        return true;
    }

    const reversedString = wordPassed.toLowerCase().split('').reverse().join('');
    return wordPassed.toLowerCase() === reversedString;
}

const word1 = isPalindrome('')
console.log(word1)

const word2 = isPalindrome('roTAtor')
console.log(word2)

const word3 = isPalindrome('madam')
console.log(word3)

const word4 = isPalindrome('Kate')
console.log(word4)


/*
вивести тільки парні числа з масиву, вивести в зворотньому порядку
example:
getPaired(new Array(1,2,3,4,5,6)) => [6,4,2]
*/

const arr1 = [1, 5, 8, 10, 13]
const arr2 = [4, 9, 12, 20]

const myFunction = function(arrPassed) {
    const dividableByTwo = arrPassed.filter(item => item % 2 === 0);
    console.log(dividableByTwo.reverse());
}

myFunction(arr1);
myFunction(arr2);


/*
завдання із *
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

const strArr1 = ["flower", "flow", "flight"]
const strArr2 = ["dog", "racecar", "car"]
const strArr3 = ["apple", "approval", "application", "app"]

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;

        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }

        prefix = prefix.slice(0, j);

        if (prefix === "") {
            break;
        }
    }

    return prefix;
    
}

console.log(longestCommonPrefix(strArr1))
console.log(longestCommonPrefix(strArr2))
console.log(longestCommonPrefix(strArr3))