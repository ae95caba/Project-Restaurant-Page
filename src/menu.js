
const menu = () => {

    var content = document.createElement("div");
    content.id="content";
    document.body.appendChild(content);
    
    var tittle = document.createElement("div");
    tittle.innerText = "Menu";
    tittle.style.color = "red";
    
    content.appendChild(tittle);
    var bebidas = document.createElement("div");
    bebidas.innerText = "Bebidas";
    content.appendChild(bebidas);
    var listaBebidas = document.createElement("div");
    listaBebidas.innerText = "Coca-Cola, Sprite, Manaos";
    content.appendChild(listaBebidas);
    

}

export default menu;