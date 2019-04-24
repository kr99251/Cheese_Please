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
}

var mouse = document.getElementById("mouse");
var container = document.getElementById("container");

mouse = new Mouse(900, 0, 200, mouse);

container.addEventListener("keydown", moveMouse);

function moveMouse(event) {
    if (event.keyCode === 37){
        mouse.style.left = mouse.style.left - 5 +"px";
    } else if (event.keyCode === 39) {
        mouse.style.left = mouse.style.left - 5 +"px";
}
}
