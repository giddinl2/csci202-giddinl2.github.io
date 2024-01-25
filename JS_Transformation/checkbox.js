var night = false;

function toggle() {
    console.log("Toggled");
    var body = document.body;
    var checkbox = document.getElementById("checkbox").checked;
    night = checkbox;
    console.log(checkbox);
    body.classList.toggle("night", checkbox);
    if (night) {
        var owl = new Audio('./audio/owl.mp3');
        owl.play();
    } else {
        var bird = new Audio('./audio/bird.mp3');
        bird.play();
    }
}