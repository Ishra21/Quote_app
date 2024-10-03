let heading = document.querySelector("h1")
let authorName = document.querySelector("p")
let button = document.querySelector("button")

const fetchQuote = async () =>{
 const response = await fetch("http://quotable.io/random")
 const data = await response.json();
    heading.innerText = data.content;
    authorName.innerText= data.author;

};


fetchQuote();
button.addEventListener("click", fetchQuote)

setInterval(() => {
    fetchQuote();
}, 15000);