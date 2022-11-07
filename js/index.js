import ItemController from "./itemsController.js";


//id generator
let idGen = (Math.floor(Math.random() * 2));
let item = new ItemController();


//input from html
let currentId = idGen;
const name = document.getElementById('item');
const description = document.getElementById('description');
const img = document.getElementById('imgurl');

//button
const btn = document.getElementById('button');

//display data
// const displayTitle = document.getElementById('displaytitle');
// const displayDescription = document.getElementById('displaydescription');
// const displayImage = document.getElementById('image');
// const postDate = document.getElementById('time');
// document.getElementById('emptyCard').hidden = true;

//create instance
const addItem = () => {
    let item = new ItemController(currentId++, name.value, description.value, img.value);
    if(name.vale === "" || description.value === ""  || img.value === ""){
        alert("Please enter your information.");
      }else{
    const container = document.createElement("div");
    const containerAttribute = document.createAttribute("class");
    containerAttribute.value = "imageContainer";
    container.setAttributeNode(containerAttribute);
    const newImg = document.createElement("img")
    newImg.src = `${img.value}`;
    newImg.style.width = "631px";
    newImg.style.height = "631px";
    container.appendChild(newImg);
    const nameElement = document.createElement("h5");
    nameElement.textContent = `${name.value}`;
    container.appendChild(nameElement)

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `${description.value}`;
    container.appendChild(descriptionElement);

    const footerElement = document.createElement("footer");
    const postElement = document.createElement("small");
    // const minutes = new Date();
    let minutes = 0;
    setInterval(function(){
        minutes++
        if(minutes > 60){
            postElement.innerHTML = `Last update ${minutes} minutes ago`;
        }else{
            postElement.innerHTML = `Last update 0 minutes ago`;
        }
         
    },60000)
    // const newMinutes = minutes.getMinutes();
    postElement.textContent = `Last update ${minutes} minutes ago`;
    
    footerElement.appendChild(postElement);

    container.appendChild(footerElement);

    const postBody = document.getElementById("emptyCard");
    postBody.appendChild(container);


    
    // displayImage.src = `${img.value}`;
    // displayTitle.innerHTML = `${name.value}`;
    // displayDescription.innerHTML = `${description.value}`;
    // postDate.innerHTML = Date();
    // console.log(item);
    // document.getElementById('emptyCard').hidden = false;


    

    

    var form = document.querySelector('#input');
    form.reset();
}

}



//submit functionality
btn.addEventListener('click', addItem);

//method add item to an array
