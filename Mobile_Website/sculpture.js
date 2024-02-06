
function guessSculpture(event) {
    if (event.key == "Enter") {
        var input = document.getElementById("sculpture");
        var guess = input.value.toLowerCase();
        const sculptures = document.getElementsByClassName("col");
        console.log(input);
        for (let i = 0; i < sculptures.length; i++) {
            if (guess == sculptures[i].getAttribute("name").toLowerCase() || guess == sculptures[i].getAttribute("artist").toLowerCase()) {
                sculptures[i].classList.add("found");
                sculptures[i].children[1].innerHTML = `${sculptures[i].getAttribute("name")}<br>${sculptures[i].getAttribute("artist")}`;
                sculptures[i].addEventListener('click', function() {
                    openSculptureInfo(sculptures[i].getAttribute("link"));
                });
            }
        }
        input.value = "";
    }
}

function openSculptureInfo(link) {
    if (link != null) window.open(link)
}
