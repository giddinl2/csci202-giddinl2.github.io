
var sculptureCount = 0;
var maxSculptures = 0;

function onLoad() {
    const sculptures = document.getElementsByClassName("col");
    maxSculptures = sculptures.length;
    for (let i = 0; i < sculptures.length; i++) {
        var name = sculptures[i].getAttribute("name");
        var artist = sculptures[i].getAttribute("artist");
        if (localStorage.getItem(name + ", " + artist) != null) {
            unlockSculpture(sculptures[i], name, artist);
        }
    }
    console.log(sculptureCount);
    var progress_text = document.getElementById("progress-text");
    progress_text.innerText = `${sculptureCount} / ${maxSculptures} sculptures found`;
}

function guessSculpture(event) {
    if (event.key == "Enter") {
        var input = document.getElementById("sculpture");
        var guess = input.value.toLowerCase();
        const sculptures = document.getElementsByClassName("col");
        console.log(guess);
        for (let i = 0; i < sculptures.length; i++) {
            var name = sculptures[i].getAttribute("name");
            var artist = sculptures[i].getAttribute("artist");
            if (((guess != "untitled" && guess == name.toLowerCase()) || guess == artist.toLowerCase() || guess == "i love sculptures") && localStorage.getItem(name + ", " + artist) == null) {
                sculptures[i].scrollIntoView({block:"center", behavior: "smooth"});
                localStorage.setItem(name + ", " + artist, true);
                setTimeout(function(s, n, a) { unlockSculpture(s, n, a) }, 100 * Math.floor(i / 2), sculptures[i], name, artist);
            }
            console.log(name);
        }
        input.value = "";
    }
}

function unlockSculpture(sculpture, name, artist) {
    sculpture.classList.add("found");
    sculpture.children[1].innerHTML = `${name},<br>${artist}`;
    sculpture.addEventListener('click', function() {
        openSculptureInfo(sculpture.getAttribute("link"));
    });
    sculptureCount++;
    var progress_bar = document.getElementById("progress-bar");
    var progress_text = document.getElementById("progress-text");
    var percent = Math.round(100 * sculptureCount / maxSculptures)
    progress_bar.style = `width: ${percent}%`;
    progress_bar.setAttribute("aria-valuenow", percent);
    progress_text.innerText = `${sculptureCount} / ${maxSculptures} sculptures found`;
    if (sculptureCount >= maxSculptures) {
        var progress = document.getElementById("progress");
        progress.classList.add("complete");
        progress_bar.classList.add("progress-bar-striped", "progress-bar-animated");
    }
}

function openSculptureInfo(link) {
    if (link != null) window.open(link);
}

function resetProgress() {
    localStorage.clear();
    location.reload();
}

document.onload = onLoad();
