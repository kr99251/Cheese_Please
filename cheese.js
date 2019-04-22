let mouse = document.getElementById("mouse");
var container = document.getElementById("container");

class Obstacle {
    constructor(_xpos, _ypos, _size, _id) {
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.size = _size;
    this.elem = document.getElementById(_id);
    this.elem.style.width = this.size + "px";
  }
    render() {
    this.elem.style.bottom = this.ypos + "px";
    this.elem.style.left = this.xpos + "px";
}

mouse = new Mouse(900, 0, 200, mouse);

container.addEventListener("keydown", moveMouse);

function moveMouse(event) {
    let xPosition = event.clientX
    if (event.keyCode === 37){
        xPosition = xPosition - 5;
    } else if (event.keyCode === 39) {
        xPosition = xPosition + 5
    }
