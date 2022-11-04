

function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+item.img +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}


const loadStorageSampleData = () => {
 if(!localStorage.getItem('items')){
    const sampleItems = [{'name':'Avocado Pens',
    'img' : '/src/avocadoPens.jpeg',
    'description' : 'These are avocado pens.'},
    {'name':'Fruit Notebooks',
    'img' : '/src/fruitNotebooks.jpeg',
    'description' : 'These are fruit notebooks.'},
    {'name':'Giant Banana Plushie',
    'img' : '/src/bananaPlushie.jpeg',
    'description' : 'This is a giant banana plushie.'}];
    localStorage.setItem('items', JSON.stringify(sampleItems));
 }
}

function loadCardsListFromItemsController(){
    for(let i = 0, size = itemsController.items.length; i < size ; i++){
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();