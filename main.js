let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];
//Step 1
let storyWords = story.split(" ");
//Step 2
console.log(storyWords.length);

//Step3

let betterWords = storyWords.filter(function (storyWord) {
  return !unnecessaryWords.includes(storyWord);
});
//console.log(betterWords);

//Step 4

//We plan to reduce the betterWords array
const numOverused = betterWords.reduce(function (acc, word) {
  //Loop over the over used words
  const addToObj = overusedWords.includes(word);

  //We are only concerned about the overused words
  if (addToObj) {
    if (acc[word]) {
      acc[word] += 1;
    } else {
      acc[word] = 1;
    }
  }
  return acc;
}, {});

console.log(numOverused);
//Step 5

function countAbbr(betterWords) {
  let count = 0;
  for (let i = 0; i < betterWords.length; i++) {
    if (betterWords[i].includes(".") || betterWords[i].includes("!")) {
      count++;
    }
  }
  return count;
}

let abbreviationCount = countAbbr(betterWords);

//Step 6
console.log(`There are ${abbreviationCount} sentences in this paragraph!`);
console.log(`Word count = ${storyWords.length}`);

//Step 6 - Function

var logItem = function (arrayItem) {
  return console.log(`The count is: ` + arrayItem.length);
};

logItem(betterWords);

//Step 7

const joinBetterWords = betterWords.join(" ");
console.log(joinBetterWords);

//Step 8 - question 1. Remove overused words
const removeOverUsed = betterWords.filter(function (element) {
  return !overusedWords.includes(element);
});

console.log(removeOverUsed.join(" "));

