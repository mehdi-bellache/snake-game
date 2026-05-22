import Snake from "./snake.js";


export default class Game {

    #canvas;
    #context ;
    #player ;
    #requeteAnimation ; 
    // #score ;


    constructor(canvas) {
        this.#canvas = canvas;
        this.#context = this.#canvas.getContext("2d") ;
        this.#player = new Snake( 30, 100) ; // better not to use numbers.
        this.#requeteAnimation = null ; 
        // this.#score = 0 ;
    }

   /** donne accès au canvas correspondant à la zone de jeu */
    get canvas() {
        return this.#canvas;
    }

    get context() {
        return this.#context;
    }

    get player() {
        return this.#player;
    }

    get requestAnimation() {
        return this.#requeteAnimation;
    }

    get score(){
        return this.#score ;
    }

    // incrementScore(value){
    //     this.#score += value ; 
    // }

    updateScore(value){
        this.incrementScore(value) ;
        // document.getElementById("score").textContent = this.#score ;
    }


    // keyDownActionHandler(event) {
    //     switch (event.key) {
    //         case "ArrowLeft":
    //         case "Left":
    //             this.#player.setMoving("left");
    //             break;
    //         case "ArrowRight" :
    //         case "Right" :
    //             this.#player.setMoving("right");
    //             break;
    //         case "ArrowUp" :
    //         case "Up":
    //             this.#player.setMoving("up");
    //             break;        
    //         case "ArrowDown" :
    //         case "Down":
    //             this.#player.setMoving("down");
    //             break;
    //         default: return;
    //     }
    //     event.preventDefault();
    
    // }

    // keyUpActionHandler(event) {
    //     switch (event.key) {
    //         case "ArrowLeft":
    //         case "Left":
    //             this.#player.setMoving(null);
    //             this.#player.stopMoving() ;
    //             break;
    //         case "ArrowRight" :
    //         case "Right" :
    //             this.#player.setMoving(null);
    //             this.#player.stopMoving() ;
    //             break;
    //         case "ArrowUp" :
    //         case "Up":
    //             this.#player.setMoving(null);
    //             this.#player.stopMoving() ;
    //             break;        
    //         case "ArrowDown" :
    //         case "Down":
    //             this.#player.setMoving(null);
    //             this.#player.stopMoving() ;
    //             break;
    //         default: return;
    //     }
    //     event.preventDefault();
    // }


    // handleMoveKeys() {
    //     if (this.#player.moving === 'left')
    //         this.#player.moveLeft();
    //     if (this.#player.moving === 'right')
    //         this.#player.moveRight();
    //     if(this.#player.moving === 'up')
    //         this.#player.moveUp();
    //     if(this.#player.moving === 'down')
    //         this.#player.moveDown();    
    // }
    
    // alea(n){ return Math.floor(Math.random()* n) ; }

    // restartGame() {

    //     if (this.#requeteAnimation !== null) {
    //         cancelAnimationFrame(this.#requeteAnimation);
    //         this.#requeteAnimation = null;
    //     }

    //     if (this.#eggTimer !== null) {
    //         clearInterval(this.#eggTimer);
    //         this.#eggTimer = null;
    //     }

    //     if (this.#rocketTimer !== null) {
    //         clearInterval(this.#rocketTimer);
    //         this.#rocketTimer = null;
    //     }

    //     this.#eggs = [];
    //     this.#rockets = [];

    //     this.#player.setLife(3);
    //     this.#player.manageLives() ;
    //     this.#player.setX(this.#canvas.width / 2);
    //     this.#player.setY(this.#canvas.height / 2);

    //     this.#score = 0 ;
    //     document.getElementById("score").textContent = 0 ;

    //     this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    // }



    animate = () => {

        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

        this.#player.move(this.#canvas) ;

        this.#player.draw(this.#context) ;


        // this.#player.manageLives() ; a player does have life but it's just 1.

        this.#requeteAnimation = window.requestAnimationFrame(this.animate);
        
    }


    /* start the animation or stop it if previously running */
    startAndStop(){
        if( this.#requeteAnimation === null){
            this.#requeteAnimation = window.requestAnimationFrame(this.animate);
        }
        else{
            window.cancelAnimationFrame(this.#requeteAnimation);
            this.#requeteAnimation = null ; 
        }

    }
}