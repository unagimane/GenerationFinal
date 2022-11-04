export default class ItemController {
    constructor(currentId, name, description, img) {
        this.item = [];
        this.currentId = currentId;
        this.name = name;
        this.description = description,
        this.img = img;
        
    }
    
    addItem(name, description,imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };

        // Push the item to the items property
        this.items.push(item);
    }   


    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem('items')
        if(storageItems){
            const items = JSON.parse(storageItems)
            for(let i=0, size = items.length; i < size; i++){
                const item = items[i];
                this.items.push(item);
            }
        }
    }
}

