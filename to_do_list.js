const ul = document.getElementById("list");
const add = document.getElementById("add");
const listText = document.getElementById("listText");

function search(event){
    if (event.key.toLowerCase() == "enter"){      
        addList();
    }

}

function addList(){
    const pack = document.createElement("div");
    const node = document.createElement("li");
    const remove = document.createElement("button");
    remove.innerText = "X";
    remove.addEventListener('click',() =>{
        remove.parentElement.remove();
    });
    node.innerText = listText.value;
    pack.appendChild(node);
    pack.appendChild(remove);
    ul.appendChild(pack)
    listText.value = ''
}


add.addEventListener('click',() =>{
    addList();
});