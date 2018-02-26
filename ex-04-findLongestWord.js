/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 *
**/
function findLongestWord(sentence){
  let wordsArray = sentence.split(" ")
  let theWord = ""
  for(let i = 0; i < wordsArray.length; i++){
    wordsArray[i] = wordsArray[i].replace("'", "")
    if (wordsArray[i].length > theWord.length){
      theWord = wordsArray[i]
       // console.log(wordsArray[i])
    }
  }
  return theWord
}

console.group('JS Iterations Week');
  console.log('%cFunction: findLongestWord', 'background-color: green; color: white')
  console.groupCollapsed('Should return "baskets" from "I have baskets full of lemons"');
    console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
  console.groupEnd();

  console.groupCollapsed('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
    console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
  console.groupEnd();

  console.groupCollapsed('Should return "Texas" from "don’t mess with Texas"');
    console.assert(findLongestWord("don't mess with Texas") === 'Texas')
  console.groupEnd();

  console.groupCollapsed('Should return "time" from "a time to act."');
    console.assert(findLongestWord('a time to act.') === 'time')
  console.groupEnd();
console.groupEnd();
