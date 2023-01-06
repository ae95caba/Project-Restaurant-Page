const home = () => {

//content////////

    var content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);
    
    var tittle = document.createElement("div");
    tittle.innerText = "La rotiseria de Gaby";
    content.appendChild(tittle);

    var aboutUs = document.createElement("div");
    aboutUs.innerText = "La mas barata y la mejor";
    content.appendChild(aboutUs);

    var hours = document.createElement("div");
    hours.innerText = "de martes a domingos";
    content.appendChild(hours);

}

export default home;