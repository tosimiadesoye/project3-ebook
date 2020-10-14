import books from "./book.js";

let parent = document.querySelector(".bookDiv")

books.forEach(book => {
let bookDiv = document.createElement("div")
let bookImgs = document.createElement("img")
let bookArticle = document.createElement("article")
let bookTitles = document.createElement("h2")
let authors = document.createElement("p")
let price = document.createElement("p")
let description = document.createElement("summary")
let buttonDiv = document.createElement("div")
let bookButton = document.createElement("button")

bookDiv.setAttribute("class", "book")
description.setAttribute("class", "description")
bookButton.setAttribute("class", "addbtn")
authors.setAttribute("class", "author")
price.setAttribute("class", "price")

bookImgs.src = book.image
bookImgs.alt = book.name
bookImgs.height = "200"
bookImgs.width = "150"    
bookTitles.innerText = book.name
bookTitles.title = book.name
authors.innerText = book.author
price.innerText = book.price
description.innerText = book.description
bookButton.textContent = "+ Add"


let appendTags = [bookImgs,bookTitles, authors,price, description,bookButton]
appendTags.map(tags => {
    bookArticle.appendChild(tags)
    return bookDiv.appendChild(bookArticle).appendChild(buttonDiv)
    }
)

parent.appendChild(bookDiv)
})

