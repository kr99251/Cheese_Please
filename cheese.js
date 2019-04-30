//'use strict';

class Cheese {
    constructor(_xpos, _ypos, _ystep, _container) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        this.ystep = _ystep;

        let elem = document.createElement("img");
        elem.src = "./cheese.png";
        elem.style.width = "100px";
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


class CheesePlease {

    constructor() {
        this.container = document.getElementById("container");
        this.containerVal = this.container.getBoundingClientRect();
        this.cheese = new Cheese(Math.random() * (this.containerVal.width - 100), 0, .8, this.container);
        this.mouse = document.getElementById('mouse');
        this.mouse.style.left = (this.containerVal.width / 2);
        this.obstacles = [];
    }

    play() {
        const that = this;
        let id = setInterval(function () {
            const cheeseVal = that.cheese.elem.getBoundingClientRect();
            that.cheese.render();
            if (cheeseVal.bottom >= that.containerVal.bottom) {
                clearInterval(id);
                let deadMouse = document.getElementById('loser');
                that.mouse.style.visibility = "hidden";
                deadMouse.style.display = "block";
                that.cheese.elem.style.visibility = "hidden";
            }

            const mouseVal = that.mouse.getBoundingClientRect();
            if (cheeseVal.bottom >= mouseVal.top && cheeseVal.right >= mouseVal.left && cheeseVal.left <= mouseVal.right) {
                that.mouse.insertBefore(that.cheese.elem, that.mouse.childNodes[0]);
                that.cheese.elem.classList.remove("cheese");

                let cheeseSpeed = that.cheese.ystep + .2;
                that.cheese = new Cheese(Math.random() * (that.containerVal.width - 100), 0, cheeseSpeed, this.container);
            }

            if (mouseVal.height >= that.containerVal.height) {
                clearInterval(id);
                let liveMouse = document.getElementById('winner');
                that.mouse.style.visibility = "hidden";
                liveMouse.style.display = "block";
                that.cheese.elem.style.visibility = "hidden";
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



let game = new CheesePlease();

window.addEventListener('keydown', (e) => {

    if (e.keyCode == '37') {
        game.moveLeft();
    } else if (e.keyCode == '39') {
        game.moveRight();
    }
});

game.play();






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
