function isPalindrome(word) {
  let length = word.length
  for(i=0; i<length; i++){
    if(word[i] !== word [length -1 - i]){
      return false
    }
  }
  return true
}

//create a function that takes one argurment, a string.  If the string is a palindrome, return true, otherwise return false.
//a for loop that says: if the first letter equals the last, and the second letter equals the second to last etc until you reach the middle, 
//return true. else, return false.

// racecar
// ^     ^
//  ^   ^
//   ^ ^
//    ^
//   true     compares each letter to its mirrored spot


// byvv  ggh   n x xxzz aZk
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
