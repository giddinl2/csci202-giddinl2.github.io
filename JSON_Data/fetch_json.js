document.onload = fetchJSON();

async function fetchJSON() {
    const apod_response = await fetch("https://api.nasa.gov/planetary/apod?api_key=XUVgHcnJW5PdskFDTjtfGjmucqsHbcpRFQFcb9fb");
    const apod_json = await apod_response.json()
    document.body.style.backgroundImage = `url(${apod_json.hdurl})`
    document.getElementById("copyright").innerText = "Image Credit via APOD: " + (apod_json.copyright).replace(/[\r\n]/gm, '');

    const response = await fetch("http://api.open-notify.org/astros.json");
    const json = await response.json();
    console.log(json);
    for (var i = 0; i < json.number; i++) {
        const image_response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${json.people[i].name}&prop=pageimages&origin=*&format=json&pithumbsize=100`,
            { method: "GET" }
        );
        const image_json = await image_response.json();
        console.log(image_json);
        const pages = image_json.query.pages;
        const page = pages[Object.keys(pages)[0]];

        const element = document.createElement("div");

        const nameText = document.createElement("p");
        nameText.innerText = json.people[i].name;
        element.appendChild(nameText);
        
        if (page.title == json.people[i].name) {
            const image = document.createElement("img");
            image.src = page.thumbnail.source;
            element.appendChild(image);
        }

        const craftText = document.createElement("p");
        craftText.innerText = "Aboard the " + json.people[i].craft;
        element.appendChild(craftText);

        element.id = json.people[i].name;
        element.onclick = function() {
            openNewWindow("https://en.wikipedia.org/wiki/" + element.id);
        };
        document.getElementById("astronauts").appendChild(element);
    }
    document.getElementById("astronaut-count").innerText = "There are currently " + json.number + " people in space";
}

function openNewWindow(link) {
    if (link != null) window.open(link)
}