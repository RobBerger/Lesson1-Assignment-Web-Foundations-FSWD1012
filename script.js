function stringCounter(sentence){
    sentenceWords = sentence.split(" ");
    sentenceCharacters = sentence.split("");
    let numberOfWordsInSentence = sentenceWords.length;
    let numberOfCharactersInSentence = sentenceCharacters.length;
    console.log("No. of Words: " + numberOfWordsInSentence);
    console.log("No. of Characters: " + numberOfCharactersInSentence);
}

// TEST CASE 1
// let sentence1 = "The largest living thing on earth is a giant sequoia named General Sherman";
// stringCounter(sentence1);

// TEST CASE 2
// let sentence2 = "A sunset on Mars is blue";
// stringCounter(sentence2);

stringCounter("This is a Test Sentence");