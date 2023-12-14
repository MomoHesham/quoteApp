


var simpleQuotes = [
    {
        image:"images/oscar-wilde.jpg",
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde",
    },
    {
        image:"images/albert-einstein.jpg",
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein",
    },
    {
        image:"images/frank-zappa.jpg",
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa",
    },
    {
        image:"images/marcus-tullius-cicero.jpg",
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero",
    },
    {
        image:"images/bernard-m-baruch.jpg",
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch",
    },
    {
        image:"images/mae-west.jpg",
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West",
    },
    {
        image:"images/mahatma-gandhi.jpg",
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi",
    },
    {
        image:"images/mark-twain.jpg",
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain",
    }
];
var oldrand;
function addQuote() {
    var rand = Math.floor(Math.random() * simpleQuotes.length);
    if (oldrand != rand) {
        design(rand) 
        oldrand = rand;
    } else {
        rand = Math.floor(Math.random() * simpleQuotes.length);
        design(rand) 
        oldrand = rand;
    }
}
function design(index) {
    document.getElementById("quoteBox").innerHTML = `<div class="quoteContent">
    <img src="${simpleQuotes[index].image}" class="img-thumbnail rounded-circle"/>
    <p class="quote">
      ${simpleQuotes[index].quote}
    </p>
    <p class="author">
        ${simpleQuotes[index].author}
    </p>
</div>`
}