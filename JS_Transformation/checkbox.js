var night = false;

function toggle() {
    console.log("Toggled");
    var body = document.body;
    var checkbox = document.getElementById("checkbox").checked;
    night = checkbox;
    console.log(checkbox);
    body.classList.toggle("night", checkbox);
}