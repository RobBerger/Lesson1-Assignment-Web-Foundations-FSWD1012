function stringCounter(sentence){
    sentence = sentence.split(" ");
    let numberOfWordsInSentence = sentence.length;
    console.log(sentence);
    console.log("No. of Words: " + numberOfWordsInSentence);
}

// TEST CASE 1
// let sentence1 = "The largest living thing on earth is a giant sequoia named General Sherman";
// stringCounter(sentence1);

// TEST CASE 2
// let sentence2 = "A sunset on Mars is blue";
// stringCounter(sentence2);

stringCounter("This is a Test Sentence");