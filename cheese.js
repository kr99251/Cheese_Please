//'use strict';

class CheesePlease {

    constructor() {
        this.mouse = document.getElementById('mouse')
        this.obstacles = [];
    }

    play() {
        // this is where you will populate the array, update ...
    }


    moveLeft() {
        this.mouse.style.left = parseInt(mouse.style.left) - 5 + 'px';
    }

    moveRight() {
        this.mouse.style.left = parseInt(mouse.style.left) + 5 + 'px';
    }

}

let game = new CheesePlease();

window.addEventListener('keydown', (e) => {

        if (e.keyCode == '37') {
            game.moveLeft();
        } else if (e.keyCode == '39') {
            game.moveRight();
        }
});

game.play();

class Cheese {
    constructor(_xpos, _ypos,_ystep) {
      this.xpos = _xpos;
      this.ypos = _ypos;
      this.ystep = _ystep;

      let elem = document.createElement("img");
        elem.src = "./cheese.png";
        elem.style.width = "100px";
        elem.className = "cheese";
    //elem.id = "cheese"
        let container = document.getElementById("container")
  container.appendChild(elem);

        this.elem = elem;
    }

     render () {
        this.elem.style.top = this.ypos + 'px';
        this.elem.style.left = this.xpos + 'px';
console.log(this.elem.style.top, this.elem.style.left);
    }
}

let first = new Cheese(Math.random()*1000,0,0);
first.render();


/*class Obstacle {
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
*/
