


const contact = () => {
    //content////////
        var content = document.createElement("div");
        content.id = "content";
        document.body.appendChild(content);
        
        var tittle = document.createElement("div");
        tittle.innerText = "Contactanos";
        content.appendChild(tittle);
    
        var aboutUs = document.createElement("div");
        aboutUs.innerText = "Telefono 123451412123";
        content.appendChild(aboutUs);
    
        var hours = document.createElement("div");
        hours.innerText = "Direccion calle falsa 123";
        content.appendChild(hours);
    
    }
    
    export default contact;