document.onload = fetchJSON();

async function fetchJSON() {
    const apod_response = await fetch("https://api.nasa.gov/planetary/apod?api_key=XUVgHcnJW5PdskFDTjtfGjmucqsHbcpRFQFcb9fb");
    const apod_json = await apod_response.json()
    document.body.style.backgroundImage = `url(${apod_json.hdurl})`
    document.getElementById("copyright").innerText = "Image Credit via APOD: " + (apod_json.copyright).replace(/[\r\n]/gm, '');

    const response = await fetch("http://api.open-notify.org/astros.json");
    const json = await response.json();
    const names = json.people
    console.log(json);
    for (var i = 0; i < json.number; i++) {
        const element = document.createElement("div");
        const nameText = document.createElement("p");
        nameText.innerText = json.people[i].name;
        element.appendChild(nameText);
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