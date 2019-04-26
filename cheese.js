
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

    moveSideways(e) {



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
