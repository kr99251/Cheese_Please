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
  animatedDiv.src = "https://www.google.com/search?q=mouse+cartoon&safe=strict&rlz=1C1GGRV_enUS811US811&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjf15Xgw-ThAhXO-lQKHS48C4oQ_AUIDigB&biw=1920&bih=974#imgrc=njiARnAZlaP6xM:";
  animatedDiv.id = "mouse";
container.appendChild(animatedDiv);

new Mouse(900, 0, 200, animatedDiv.id)
