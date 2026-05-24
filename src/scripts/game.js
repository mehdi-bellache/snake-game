
import Snake from "./snake.js";
import Segment from "./segment.js";


export default class Game {

    #canvas;
    #context ;
    #player ;
    #requeteAnimation ; 


    constructor(canvas) {
        this.#canvas = canvas;
        this.#context = this.#canvas.getContext("2d") ;
        this.#player = new Snake(30, 100) ; // better not to use numbers.
        this.#requeteAnimation = null ;
    }

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


    animate = () => {

        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

        // this.#player.move(this.#canvas) ;

        this.#player.addSegment(new Segment(10, 10));

        this.#player.draw(this.#context) ;


        // this.#player.manageLives() ; a player does have life but it's just 1.

        this.#requeteAnimation = window.requestAnimationFrame(this.animate);
        
    }


    // /* start the animation or stop it if previously running */
    // startAndStop(){
    //     if( this.#requeteAnimation === null){
    //         this.#requeteAnimation = window.requestAnimationFrame(this.animate);
    //     }
    //     else{
    //         window.cancelAnimationFrame(this.#requeteAnimation);
    //         this.#requeteAnimation = null ; 
    //     }

    // }
}