function isPalindrome(string) {
  // Write your algorithm here

  let reversedString = string.split("").reverse().join("");
  return string.toLowerCase() === reversedString.toLowerCase();
}

/* 
  Add your pseudocode here

  Convert the string to an array so I can manipulate individual letters using .split()
  Use .reverse() method to reverse the order of the elements in the array in place and get the reversed array. 
  array.reverse() => reversed array
  reversed array => reversedString
  Use .join() to get the string back together
  if reversedString is strictly equal to string, return true, if not return false
*/

/*
  Add written explanation of your solution here

The code begins by creating a function named "isPalindrome" that takes in one parameter, ‘string’ which is the text we want to verify if it qualifies as  a palindrome or not.

Inside the function, we declare  a variable called "reversedString" using let to reverse our string's text order

Our variable then uses three methods: split(), reverse(), and join() on the string to manipulate it and create a new string(reversedString) that is reversed.

split() method splits up the original word into an array of individual characters.

reverse() method reverses the array we created using split() so that the last character becomes first, second-last character becomes second and so on.

join() method joins all these characters back together to form one string.

Using these three methods we take our original string and reverse its order.

Next, we return convert our string to lowercase using .toLowerCase() and use the comparison operator(===) to check whether the lowercase version of our string  is strictly equal to the lowercase version of the reversed string using .toLowerCase() (reversedString.toLowerCase())

This comparison determines whether the original string  is similar to its reversed version .If both are equal/similar , our string was already a palindrome since reversing it didn't change anything about it - therefore returning true.

If not equal, our original string wasn’t a palindrome since reversing it changed its order - therefore returning false.

 
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
