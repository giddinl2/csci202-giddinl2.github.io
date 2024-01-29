const text = [
    "What a nice, clear sky...",
    "I hope no clouds roll in...",
]
var textCount = 0;
var textChar = 0;
const text_delay = 100;

function create_clouds() {
    setTimeout(() => {
        start_dialogue();
    }, 3000);
}

function start_dialogue() {
    var advance = setInterval(() => {
        advance_text();
    }, text_delay);
    setTimeout(() => {
        textCount = 1;
        textChar = 0;
        setTimeout(() => {
            textCount = 0;
            textChar = 0;
            document.getElementById("dialogue").textContent = "";
            clearInterval(advance);
            create_cloud(2000);
        }, text[1].length * text_delay + 3000);
    }, text[0].length * text_delay + 3000);
}

function advance_text() {
    if (textChar < text[textCount].length) {
        textChar++;
    }
    document.getElementById("dialogue").textContent = text[textCount].substring(0, textChar);
}

function create_cloud(timer) {
    console.log("Cloud created");
    var vPos = Math.random() * 50;
    var vSpeed = 1 + Math.random();
    var multiplier = 1;
    if (night) {
        multiplier = 1.5;
        vSpeed /= multiplier;
        vPos *= multiplier;
    }
    var cloud = document.createElement("img");
    cloud.className = "cloud";
    cloud.src = "./images/cloud_day.png";
    cloud.style.left = "-164px";
    cloud.style.top = `calc(1vh * ${vPos})`
    cloud.style.transition = `left calc(10s * ${vSpeed}) linear 0s`;
    cloud.onclick = function() {
        hover_cloud(cloud);
    };
    var clouds = document.getElementById("clouds");
    clouds.appendChild(cloud);
    setTimeout(() => {
        move_cloud(cloud);
    }, 100);
    setTimeout(() => {
        destroy_cloud(cloud);
    }, 40000);
    if (timer > 500) {
        timer -= 20 / multiplier;
        if (timer < 500) {
            timer = 500;
        }
    }
    setTimeout(() => {
        create_cloud(timer);
    }, (timer / multiplier));
    console.log(timer / multiplier);
}

function move_cloud(cloud) {
    cloud.style.left = "100vw";
}

function hover_cloud(cloud) {
    cloud.style.left = "-164px";
}

function destroy_cloud(cloud) {
    cloud.remove();
}