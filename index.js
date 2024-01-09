const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  //iterate each tutorial
  return tutorials.map(tutorial => {
    //split tutorial into  array
    const words = tutorial.split("");

    //capitalise first letter of each word using .map
    const titleCasedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)//rest of the word is lower case;
    })

    //bring back title case words back together into a string
    return titleCasedWords.join("");
  })
}

console.log(titleCased());