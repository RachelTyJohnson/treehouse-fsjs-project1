//array of quotes
let quotes = [
  {
    quote: "Toto, I've got a feeling we're not in Kansas anymore.",
    source: "Dorothy",
    citation: "The Wizard of Oz",
    year: 1939
  },
  {
    quote: "May the Force be with you.",
    source: "Yoda",
    citation: "Star Wars",
    year: 1977
  },
  {
    quote: "E.T. phone home.",
    source: "E.T.",
    citation: "E.T. The Extra-Terrestrial",
    year: 1982
  },
  {
    quote: "Elementary, my dear Watson.",
    source: "Sherlock Holmes",
    citation: "The Adventures of Sherlock Holmes",
    year: 1929
  },
  {
    quote: "I'm king of the world!",
    source: "Jack",
    citation: "Titanic",
    year: 1997
  },
]


//getRandomQuote function
function getRandomQuote(){
  let randNum = Math.floor (Math.random() * quotes.length );
  return quotes[randNum];
}



/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote(){
  //get a random quote
  let theQuote = getRandomQuote();

  //change the quote
  let quoteContainer = document.querySelector('.quote');
  quoteContainer.textContent = theQuote['quote'];

  //change the source
  let sourceContainer = document.querySelector('.source');
  let sourceString = `${theQuote['source']}`;
  if (theQuote['citation']!=''){
    sourceString += `<span class="citation">${theQuote['citation']}</span>`
  }
  if (theQuote['citation']!=''){
    sourceString += `<span class="citation">${theQuote['citation']}</span>`
  }

  sourceContainer.innerHTML = sourceString;
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
