var playButton = document.getElementById('letsPlay');
var homeButton = document.getElementsByClassName('home');
let goal = document.getElementById("goal");

class Cheese {
    constructor(_xpos, _ypos, _ystep, _container) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.ystep = _ystep;

        let elem = document.createElement("img");
        elem.src = "./cheesel.png";
        elem.style.width = "150px";
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
        this.cancel = false;
    }

    play() {
        const that = this;

        goal.style.display = "block";

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

            if (cheeseVal.bottom >= mouseVal.top && cheeseVal.right >= mouseVal.left && cheeseVal.left <= mouseVal.right && cheeseVal.top <= mouseVal.top) {
                that.stack.insertBefore(that.cheese.elem, that.stack.childNodes[0]);
                that.cheese.elem.classList.remove("cheese");

                let cheeseSpeed = that.cheese.ystep + .15;
                that.cheese = new Cheese(Math.random() * (that.containerVal.width - 100), 0, cheeseSpeed, container);
            }
            let goalVal = goal.getBoundingClientRect();
            if (mouseVal.top <= goalVal.bottom) {
                clearInterval(id);
                that.mouse.style.visibility = "hidden";
                liveMouse.style.display = "block";
                that.cheese.elem.style.visibility = "hidden";
                that.mouse.removeChild(that.stack);
            }

        }, 10);

    }

    moveLeft() {
        let mouseSide = this.mouse.getBoundingClientRect();
        if (mouseSide.left > this.containerVal.left) {
            this.mouse.style.left = parseInt(this.mouse.style.left) - 50 + 'px';
        }
    }

    moveRight() {
        let mouseSide = this.mouse.getBoundingClientRect();
        if (mouseSide.right < this.containerVal.right) {
            this.mouse.style.left = parseInt(this.mouse.style.left) + 50 + 'px';
        }
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
    homepage.style.display = "none";
    container.style.display = "inline-block";
    mouse.style.visibility = "visible";
    game = new CheesePlease();
    game.play();
});

for (var i = 0; i < homeButton.length; i++) {
    homeButton[i].addEventListener('click', () => {
        homepage.style.display = "block";
        container.style.display = "none";
        goal.style.display = "none";
        deadMouse.style.display = "none";
        liveMouse.style.display = "none";
    });

}

