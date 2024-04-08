// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // define a method
  myMethod() {
    // code to run when method is called
  }
}

function main() {
  const fillers = {
    lonely_soul: [
      "Mother",
      "Father",
      "Brother",
      "Sister",
      "My Lady",
      "Good Sir",
      "My Lord",
      "My Liege",
      "My Queen",
      "Step Bro",
    ],
    introduction: [
      "It hath come upon my attention that you are without a betrothal $future_time_period which is quite",
      "I am privee to thine misfortune as of $past_time_period. However, to go on unloved for this great an expanse is exorbantly ",
      "A soul unbound by fate is surly to unravel unto despair. Life unloved surly becomes ",
      "Tis a cold day within Hell whence a devil such as yourself goes unloved. It would be sin upon my soul to allow your courtship to become "
    ],
    disapointment: [
      "disappointing",
      "unruly",
      "unbecoming",
      "depressing",
      "disconcerting",
      "discouraging",
      "disheartening",
      "distasteful",
      "frustrating",
      "mediocre",
      "unpleasant",
      "unsatisfying",
    ],
    future_time_period: [
      "in the coming year",
      "tomorrow",
      "in a month",
      "for the ides of march",
    ],
    past_time_period: [
      "late last year",
      "early last year",
      "last Wednesday",
      "yesterday",
      "forever ago",
    ],
    title: [
      "The Love Doctor",
      "The Prognosticator of Passion",
      "Combiner of Constituents",
      "Gregory",
      "The Flame of Eternal Love",
      "Sir Matchalot",
      "Herald of Cupid",
      "Aphrodesiac Andy",
    ],
    catch_phrase: [
      "provide mine service unto thee",
      "extend mine hand to thee",
      "indulge upon thine glamor",
      "offer upon a lonely character",
    ],
    match_phrase: [
      "aquire a suitor of upmost taste",
      "discover for you a reputable match",
      "hark the coming of the new swain",
      "welcome into thine life a tiding of passion",
    ],
    lover: [
      "The Magnificent Mo",
      "Gregory",
      "The Fairest Maiden, Gwenyvere",
      "Nasty Natasha",
      "Mitt Romney",
      "Jeromiah Two Feet",
      "My Lady, Lily",
      "Amelie",
      "Jigalo Jack",
      "Sir Gawainn",
      "King Charming",
      "The Dastardly Draven",
    ],
    lover_inquiry: [
      "$lover, hath been known through out the realm as being in possesion of the fairest of complexions",
      "Take the hand of $lover in holy matrimony $future_time_period",
      "A secret admirer hath requested a quest to prove thine heart worthy",
      "Tis a match favord by the gods, ye and $lover",
      "Aphrodite pales in comparison to $lover",
    ],
    farewell:["Farewell", "Go forever with Love!", "Blessings upon this new union", "Catholic Church Sanctioned", "Don't partake in debauchery, lest ye falleth from grace", "I shall be in touch"]
  };
  
  const template = `Dear $lonely_soul,
  $introduction $disapointment. Allow I, $title, to $catch_phrase and $match_phrase. $lover_inquiry.
  $farewell
  `;
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
  
}

// let's get this party started - uncomment me
main();