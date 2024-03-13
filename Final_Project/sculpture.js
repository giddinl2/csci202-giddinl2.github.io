
var sculptureCount = 0;
var maxSculptures = 0;
var reset = false;

function onLoad() {
    sculptureCount = 0;
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

function enter(event) {
    if (event.key == "Enter") {
        guessSculpture();
    }
}

function guessSculpture() {
    var input = document.getElementById("input");
    var guess = input.value.toLowerCase().trim();
    const sculptures = document.getElementsByClassName("col");
    console.log(sculptures.length);
    console.log(guess);
    var correct = false;
    for (let i = 0; i < sculptures.length; i++) {
        var name = sculptures[i].getAttribute("name");
        var artist = sculptures[i].getAttribute("artist");
        if (((guess != "untitled" && guess == name.toLowerCase()) || guess == artist.toLowerCase() || guess == "i love sculptures")) {
            correct = true;
            if (sculptures[i].parentElement.parentElement.classList.contains("hidden")) {
                sculptures[i].parentElement.parentElement.classList.remove("hidden");
            }
            input.blur();
            sculptures[i].scrollIntoView({block:"center", behavior: "smooth"});
            if (localStorage.getItem(name + ", " + artist) == null) {
                localStorage.setItem(name + ", " + artist, true);
                setTimeout(function(s, n, a) { unlockSculpture(s, n, a) }, 500, sculptures[i], name, artist);
            }
        }
    }
    input_text = document.getElementById("input-text");
    if (correct) {
        input.value = "";
        input_text.innerHTML = "Input sculpture or artist name";
        input_text.classList.remove("incorrect");
    } else {
        input_text.innerHTML = "No such sculpture or artist exists, try again";
        input_text.classList.add("incorrect");
    }
}

function unlockSculpture(sculpture, name, artist) {
    console.log("Unlocked sculpture " + name + " by " + artist);
    sculpture.classList.add("found");
    if (sculpture.parentElement.parentElement.classList.contains("hidden")) {
        sculpture.parentElement.parentElement.classList.remove("hidden");
    }
    sculpture.children[1].innerHTML = `${name},<br>${artist}`;
    sculpture.addEventListener('click', function() {
        openSculptureInfo(sculpture.getAttribute("link"));
    });
    sculptureCount++;
    var progress_bar = document.getElementById("progress-bar");
    var progress_text = document.getElementById("progress-text");
    var percent = Math.round(100 * sculptureCount / maxSculptures);
    console.log(sculptureCount + "/" + maxSculptures + ": " + percent + "% of sculptures found");
    progress_bar.style = `width: ${percent}%`;
    progress_bar.setAttribute("aria-valuenow", percent);
    progress_text.innerText = `${sculptureCount} / ${maxSculptures} sculptures found`;
    // if (sculptureCount == maxSculptures - 2) {
    //     document.getElementById("extra").classList.remove("hidden");
    // }
    // if (sculptureCount == maxSculptures - 1) {
    //     document.getElementById("extra-extra").classList.remove("hidden");
    // }
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
    if (reset) {
        localStorage.clear();
        location.reload();
        window.scrollTo({ top: 0 });
    } else {
        reset = true;
        button = document.getElementById("reset");
        button.innerText = "Are you sure?"
    }
}

var stuck = false;

function scroll () {
    if (!stuck) {
        if (scrollY > 125) {
            document.getElementById("sticky").style.boxShadow = "0px 5px 10px -5px black";
            stuck = true;
        }
    } else {
        if (scrollY < 125){
            document.getElementById("sticky").style.boxShadow = "none";
            stuck = false;
        }
    }
}

window.addEventListener("scroll", scroll, false);

document.onload = onLoad();
