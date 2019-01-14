// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "alligator",
      "green",
      "chomp",
      "snack",
      "swamp",
      "scaly",
      "crocodile",
      "gator",
      "scaly",
      "crocodile",
      "bask",
      "bite",
      "crocodillian",
      "Florida",
      "gator",
      "hunter",
      "bumpy",
      "jaw",
      "marsh",
      "reptile",
      "living fossil",
      "river",
      "swimming",
      "toothy",
      "leather",
      "tail",
      "bayou",
      "gator skin",
      "American",
      "territorial",
      "snapping",
      "amphibian",
      "mississippiensis",
      "muddy",
      "wrestle",
      "teeth",
      "tail",
      "crush",
      "den",
      "eggs",
      "caiman",
      "gharial",
      "freshwater",
      "wetlands",
      "gator",
      "hatchling"
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 500;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;
