// DOM = Document-Object-Model
// We have access to the window object because that is generated by JavaScript
// Inside the document we have access to all the HTML code

// A few ways we can select elements

// Cannot use array methods on this
// however we can still access them by writing
// headers[0] or headers[1]

// Not actually an array, it's a container

const headers = document.getElementsByTagName("h2");

console.log(headers);

const list = document.getElementsByClassName("item");

console.log(list);

// Only gives first id with submit, not all

const button = document.getElementById("submit");

console.log(button);

// A newer "Better" way to do this is using query selector

// *******************************************************

// Only returns first h2 that it sees in the html file

const newHeader = document.querySelector("h2");

console.log(newHeader);

// If you want to get all of them you can do this

const allHeaders = document.querySelectorAll("h2");

console.log(allHeaders);

// Then we can do this to access the first

console.log(allHeaders[0]);

// Adding the . in front of the name is the way you select things in css

const newList = document.querySelector(".item");

console.log(newList);

// Advantage of this is that we can chain together multiple things

// So if we only want the class "item" that has the h2 tag and ignoring the li we can do this

const h2item = document.querySelector("h2.item");

console.log(h2item);

// OR, if we only want the a tags from the id "list" we can do this

const lista = document.querySelector("#list a");

console.log(lista);
