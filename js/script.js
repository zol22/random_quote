/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quote = [
  {
    quote: "Act first, explain later",
    source: "Dan Brown",
    citation: "Digital Fortress",
  },
  {
    quote:
      "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
    source: "Michelle Obama",
  },
  {
    quote: "The best way to predict the future is to invent it",
    source: "Alan kay",
    year: 2016,
  },
  {
    quote:
      "Change is hardest at the beginning, messiest in the middle and best at the end",
    source: "Robin S. Sharma",
    year: 2017,
  },
  {
    quote: "Whoever is happy will make others happy too",
    source: "Anne Frank",
  },
];
/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  let random_number = Math.floor(Math.random() * 5); //from 0 to 4
  for (let i = 0; i < quote.length; i++) {
    return quote[random_number];
  }
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  let random_Quote = getRandomQuote();
  //console.log(random_Quote);
  let html = `<p class="quote">${random_Quote.quote}</p><p class="source">${random_Quote.source}`;

  if (random_Quote.citation) {
    html += `<span class="citation">${random_Quote.citation}</span>`;
    console.log("Citation");
  }
  if (random_Quote.year) {
    html += `<span class="year">${random_Quote.year}</span>`;
    console.log("Year");
  } else {
    html += `</p>`;
  }

  document.querySelector("#quote-box").innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
