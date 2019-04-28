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
  _container.appendChild(elem);


        this.elem = elem;
    }

     render () {
        this.elem.style.top = this.ypos + 'px';
        this.elem.style.left = this.xpos + 'px';
        this.ypos = this.ypos + this.ystep;
    }
}


class CheesePlease {

    constructor() {
        this.container = document.getElementById("container");
        this.mouse = document.getElementById('mouse')
        this.obstacles = [];
        this.cheese = new Cheese(Math.random()*1000,0,.8,this.container);
    }

    play() {
        const that = this;
        const containerVal = that.container.getBoundingClientRect();
        let id = setInterval(function() {
            const cheeseVal = that.cheese.elem.getBoundingClientRect();
           that.cheese.render();
            //console.log(cheeseSize.bottom, containerSize.bottom);
            if(cheeseVal.bottom >= containerVal.bottom) {
                console.log("LOSE");
                clearInterval(id);
            }
            const mouseVal = that.mouse.getBoundingClientRect();
            if(cheeseVal.bottom >= mouseVal.top && cheeseVal.right >= mouseVal.left && cheeseVal.left <= mouseVal.right) {
                let cheeseSpeed = that.cheese.ystep + .2;
                that.cheese = new Cheese(Math.random()*1000,0,cheeseSpeed,this.container);
                console.log(cheeseSpeed);
                //code to follow mouse
            }
        }, 10);



        // this is where you will populate the array, update ...
    }


    moveLeft() {
        this.mouse.style.left = parseInt(mouse.style.left) - 10 + 'px';
    }

    moveRight() {
        this.mouse.style.left = parseInt(mouse.style.left) + 10 + 'px';
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
