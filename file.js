----------------------------------------------------------
DO NOT DO THIS:
----------------------------------------------------------

<ul>
	<li>Hello 1</li>
  <li>Hello 2</li>
  <li>Hello 3</li>
  <li>Hello 4</li>
  <li>Hello 5</li>
  <li>Hello 6</li>
  <li>Hello 7</li>
  <li>Hello 8</li>
  <li>Hello 9</li>
  <li>Hello 10</li>
</ul>

----------------------------------------------------------
DO THIS:
----------------------------------------------------------

<ul></ul>

const data = [
	"Hello 1",
  "Hello 2",
  "Hello 3",
  "Hello 4",
  "Hello 5",
  "Hello 6",
  "Hello 7",
  "Hello 8",
  "Hello 9",
  "Hello 10"
];

const ul = document.querySelector("ul");
data.forEach(item => {
	const li = document.createElement("li");
  const liText = document.createTextNode(item); // or use innerText
  li.appendChild(liText);
  ul.appendChild(li);
});

---------------------------------------------------------
NOW WITH OBJECTS:
---------------------------------------------------------

DO NOT DO THIS:
------------------

<div id="parent">
	<div>
  	<h1>Title 1</h1>
  	<p>Description to title 1</p>
    <span>Author of title 1</span>
  </div>
  <div>
  	<h1>Title 2</h1>
  	<p>Description to title 2</p>
    <span>Author of title 2</span>
  </div>
  <div>
  	<h1>Title 3</h1>
  	<p>Description to title 3</p>
    <span>Author of title 3</span>
  </div>
  <div>
  	<h1>Title 4</h1>
  	<p>Description to title 4</p>
    <span>Author of title 4</span>
  </div>
  <div>
  	<h1>Title 5</h1>
  	<p>Description to title 5</p>
    <span>Author of title 5</span>
  </div>
</div>

---------------
DO THIS:
---------------

<div id="parent"></div>

const data = [
	{
  	title: "Title 1",
		description: "Description to title 1",
    author: "Author of title 1"
  },
  {
  	title: "Title 2",
		description: "Description to title 2",
    author: "Author of title 2"
  },
  {
  	title: "Title 3",
		description: "Description to title 3",
    author: "Author of title 3"
  },
  {
  	title: "Title 4",
		description: "Description to title 4",
    author: "Author of title 4"
  },
  {
  	title: "Title 5",
		description: "Description to title 5",
    author: "Author of title 5"
  },
]

const parent = document.querySelector("#parent");
data.forEach(item => {
	const body = document.createElement("div");
  const headerDOM = document.createElement("h1");
  const descriptionDOM = document.createElement("p");
  const authorDOM = document.createElement("span");
  
  headerDOM.innerText = item.title;
  descriptionDOM.innerText = item.description;
  authorDOM.innerText = item.author;
  
  body.appendChild(headerDOM);
  body.appendChild(descriptionDOM);
  body.appendChild(authorDOM);
});

 -----------------
  You might also prefer instead
  ----------------
  
data.forEach(item => {
	const html = "
  	<div>
      <h1>" + item.title + "</h1>
      <p>" + item.description + "</p>
      <span>" + item.author + "</span>
    </div>"
	parent.innerHTML = html;
  
  /// AND DONE!!!
});

That was basically what you previously did

ANd this is just a lot for communication between different systems
Just give me a JSON data and I'll convert it to design for you

oh wow interesting
thanks

huh?
i don't even know JSON yrt loool
go ahead
I just named it body ...
It is actually the containing div tag
Scroll up and see
I'll highlight it now
i wanna ask a dom question

It's just a variable name... Not actually body lol
lol
i was so confused

where did body come from?
I've seen it
thanks
