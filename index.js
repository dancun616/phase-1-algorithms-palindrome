function isPalindrome(word) {
  // Write your algorithm here

 let arrayCharacters =  word.split('')

 let lengthOfString = arrayCharacters.length

let reversedStringArray = [];

 for(let c = 0; c < arrayCharacters.length;c++){
  reversedStringArray.push(arrayCharacters[--lengthOfString])
 }

 let reversedString = reversedStringArray.join('')

 return (reversedString === word)? true: false
  
}
console.log(isPalindrome('dad'))
/* 
  Add your pseudocode here
  convert string to array
  find length of array
  loop through array from end to start
  push each member of array to new array in reversed order
  join the array to a new string
  perform if test to determine if reversed and original string are strictly equal
*/

/*
  Add written explanation of your solution here
  convert string to array using split()
  find length of array through array.length
  loop through array from end to start using length of array to stop loop
  push each member of array to new array in reversed order by starting with the last index and in each loop decrement
  join the array to a new string using join()
  perform if test to determine if reversed and original string are strictly equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting : true");
  console.log("=>", isPalindrome("dad"))  

  console.log("Expecting : true");
console.log("=>", isPalindrome("mom"))


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;