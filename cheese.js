class Mouse {
    constructor(_xpos, _ypos, _size, _id) {
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.size = _size;
    this.elem = document.getElementById(_id);
    this.elem.style.width = this.size + "px";
  }
    render() {
    this.elem.style.top = this.ypos + "px";
    this.elem.style.left = this.xpos + "px";
}

var container = document.getElementById("container");

let animatedDiv = document.createElement("img");
  animatedDiv.className = "mouse";
  animatedDiv.src = "http://www.sclance.com/pngs/monkey-cartoon-png/monkey_cartoon_png_892923.png"
  animatedDiv.id = "mouse";
container.appendChild(animatedDiv);

new Mouse(900, 0, 200, animatedDiv.id)
