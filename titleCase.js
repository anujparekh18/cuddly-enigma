/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {
  let words = str.split(' ');
  let titleCasedWords = [];

  for(let i=0; i<words.length; i++){
    let upperCasedChar = words[i].charAt().toUpperCase();

    // console.log(titleCasedWords);
      let lowerCasedChars = words[i].slice(1).toLowerCase();
      // console.log(c);
      let titleCaseWord = upperCasedChar + lowerCasedChars;
      titleCasedWords.push(titleCaseWord);
      
       
  }
  return titleCasedWords.join(' ');
}

titleCase("I'm words liTTle teA pot");