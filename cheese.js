//'use strict';
var playButton = document.getElementById('letsPlay');
var homeButton = document.getElementsByClassName('home');

class Cheese {
    constructor(_xpos, _ypos, _ystep, _container) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.ystep = _ystep;

        let elem = document.createElement("img");
        elem.src = "./cheesel.png";
        elem.style.width = "120px";
        elem.className = "cheese";
        //elem.id = "cheese"
        this.elem = elem;
        this.render();
        _container.appendChild(elem);



    }

    render() {
        this.elem.style.top = this.ypos + 'px';
        this.elem.style.left = this.xpos + 'px';
        this.ypos = this.ypos + this.ystep;
    }
}

let container = document.getElementById("container");
let deadMouse = document.getElementById('loser');
let liveMouse = document.getElementById('winner');


class CheesePlease {

    constructor() {
        this.containerVal = container.getBoundingClientRect();
        this.cheese = new Cheese(Math.random() * (this.containerVal.width - 100), 0, .8, container);
        this.mouse = document.getElementById('mouse');
        this.mouse.style.left = (this.containerVal.width / 2);
        this.stack = document.createElement("div");
        this.stack.id = "stack";
        this.obstacles = [];
    }

    play() {
        const that = this;
        this.mouse.insertBefore(that.stack, that.mouse.childNodes[0]);
        let id = setInterval(function () {
            const cheeseVal = that.cheese.elem.getBoundingClientRect();
            that.cheese.render();
            if (cheeseVal.bottom >= that.containerVal.bottom) {
                clearInterval(id);
                that.mouse.style.visibility = "hidden";
                deadMouse.style.display = "block";
                that.cheese.elem.style.visibility = "hidden";
                that.mouse.removeChild(that.stack);
            }

            const mouseVal = that.mouse.getBoundingClientRect();
            if (cheeseVal.bottom >= mouseVal.top && cheeseVal.right >= mouseVal.left && cheeseVal.left <= mouseVal.right) {
                that.stack.insertBefore(that.cheese.elem, that.stack.childNodes[0]);
                that.cheese.elem.classList.remove("cheese");

                let cheeseSpeed = that.cheese.ystep + .2;
                that.cheese = new Cheese(Math.random() * (that.containerVal.width - 100), 0, cheeseSpeed, container);
            }

            if (mouseVal.height >= that.containerVal.height) {
                clearInterval(id);
                that.mouse.style.visibility = "hidden";
                liveMouse.style.display = "block";
                that.cheese.elem.style.visibility = "hidden";
                that.mouse.removeChild(that.stack);
            }

        }, 10);



        // this is where you will populate the array, update ...
    }


    moveLeft() {
        this.mouse.style.left = parseInt(this.mouse.style.left) - 20 + 'px';
    }

    moveRight() {
        this.mouse.style.left = parseInt(this.mouse.style.left) + 20 + 'px';
    }

}

let homepage = document.getElementById("homepage");

let game = null;

window.addEventListener('keydown', (e) => {

    if (e.keyCode == '37') {
        game.moveLeft();
    } else if (e.keyCode == '39') {
        game.moveRight();
    }
});

playButton.addEventListener('click', () => {
    console.log(liveMouse.style.display);
    homepage.style.display = "none";
    container.style.display = "block";
    mouse.style.visibility = "visible";
    game = new CheesePlease();
    game.play();
});

for (var i = 0; i < homeButton.length; i++) {
    homeButton[i].addEventListener('click', () => {
        homepage.style.display = "block";
        container.style.display = "none";
        deadMouse.style.display = "none";
        liveMouse.style.display = "none";
    });

}
//
//


/*class Obstacle {
    constructor(_xpos, _ypos, _size, _id) {
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.size = _size;
    this.elem = document.getElementById(_id);
    this.elem.style.width = thiss.size + "px";
  }
    render() {
    this.elem.style.bottom = this.ypos + "px";
    this.elem.style.left = this.xpos + "px";
}
}
*/
