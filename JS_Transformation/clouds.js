function create_clouds() {
    create_cloud(2000);
}

function create_cloud(timer) {
    console.log("Cloud created");
    var vPos = Math.random() * 50;
    var vSpeed = 1 + Math.random();
    var multiplier = 1;
    if (night) {
        multiplier = 1.5;
    }
    if (night) {
        vSpeed /= multiplier;
    }
    if (night) {
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