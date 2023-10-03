function reverseWordsInSentence(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
const inputSentence = "Bhuvaneswar is a software developer";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
