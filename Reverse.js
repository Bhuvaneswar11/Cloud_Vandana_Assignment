function reverseWordsInSentence(sentence)
 {
 let reversedSentence = "";
 let currentWord = "";

for (let i = 0; i < sentence.length; i++)
 {
   if (sentence[i] === " " || i === sentence.length- 1) 
   {
     if (i === sentence.length- 1) 
     {
       currentWord += sentence[i];
     }

     for (let j = currentWord.length- 1; j >= 0; j-- )
      {
       reversedSentence += currentWord[j];
      }

     if (i !== sentence.length- 1)
     {
       reversedSentence += " ";
     }

     currentWord = "";
   } 
   else
   {
     currentWord += sentence[i];
   }
 }

 return reversedSentence;
}

const inputSentence = "Bhuvaneswar is a software developer";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);

