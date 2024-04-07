function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  - Split the word into individual characters
  - Reverse the order of the characters
  - Join the characters back into a string
  - Check if the original word is equal to the reversed word
*/

/*
  Add written explanation of your solution here
  - The function splits the input word into individual characters, reverses their order,
    and then joins them back into a string.
  - It then compares this reversed string with the original input word to determine
    if it is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
