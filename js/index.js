import ItemController from "./itemsController.js";

//id generator
let idGen = (Math.floor(Math.random() * 2));

//input from html
let currentId = idGen;
const name = document.getElementById('item');
const description = document.getElementById('description');
const img = document.getElementById('imgurl');

//button
const btn = document.getElementById('button');

//display data
const displayData = document.getElementById('display');
const displayImage = document.getElementById('image');

//create instance
const addItem = () => {
    let item = new ItemController(currentId++, name.value, description.value, img.value);
    displayImage.src = `${img.value}`;
    displayData.innerHTML = `Item ID: ${currentId} Name: ${name.value} Description: ${description.value}`;
    console.log(item);
}


//submit functionality
btn.addEventListener('click', addItem);

//method add item to an array
