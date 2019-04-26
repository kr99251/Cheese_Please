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

var mouse = document.getElementById('mouse')
document.onkeydown = moveSideways;

function moveSideways(event) {

    event = event || window.event;

    if (e.keyCode == '32') {
        rotate();
    } else if (e.keyCode == '37') {
        moveLeft();
    } else if (e.keyCode == '39') {
        moveRight();
    }

}
function moveLeft() {
    mouse.style.left = parseInt(mouse.style.left) - 5 + 'px';
}

function moveRight() {
    mouse.style.left = parseInt(mouse.style.left) + 5 + 'px';
}
