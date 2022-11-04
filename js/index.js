import ItemController from "./itemsController.js";


//id generator
let idGen = (Math.floor(Math.random() * 2));
let item = new ItemController()


//input from html
let currentId = idGen;
const name = document.getElementById('item');
const description = document.getElementById('description');
const img = document.getElementById('imgurl');

//button
const btn = document.getElementById('button');

//display data
const displayTitle = document.getElementById('displaytitle');
const displayDescription = document.getElementById('displaydescription');
const displayImage = document.getElementById('image');
const postDate = document.getElementById('time');

//create instance
const addItem = () => {
    let item = new ItemController(currentId++, name.value, description.value, img.value);
    displayImage.src = `${img.value}`;
    displayTitle.innerHTML = `${name.value}`;
    displayDescription.innerHTML = `${description.value}`;
    postDate.innerHTML = Date();
    console.log(item);
}


//submit functionality
btn.addEventListener('click', addItem);

//method add item to an array
