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

/*let animatedDiv = document.createElement("img");
  animatedDiv.className = "mouse";
  animatedDiv.src = "https://image.shutterstock.com/image-vector/cute-cartoon-mouse-vector-illustration-260nw-98210156.jpg";
  animatedDiv.id = "mouse";
container.appendChild(animatedDiv);*/

mouse = new Mouse(900, 0, 200, mouse);
