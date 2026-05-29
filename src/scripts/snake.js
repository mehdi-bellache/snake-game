
import Segment from './segment.js' ;  

export default class Snake{
    #deltaX ;
    #deltaY ;
    #segments ;
    #moving ; 

    constructor(deltaX= 0, deltaY = 0){
        this.#deltaX = deltaX ;
        this.#deltaY = deltaY ;
        this.#segments = [] ;
        this.#moving =  null ;
        this.#segments.push(new Segment(20, 20));
    }
    
    get deltaX(){
        return this.#deltaX ;
    }
    
    get deltaY(){
        return this.#deltaY ;
    }
    
    get segments(){
        return this.#segments ;
    }
    
    get moving(){
        return this.#moving ;
    }

    setDeltaX(value){
        this.#deltaX = value ; 
    }
    
    setDeltaY(value){
        this.#deltaY = value ; 
    }

    setMoving(moving){
        this.#moving = moving ;
    }

    addSegment(segment){
        this.#segments.push(segment) ;
    }

    moveUp(){
        this.setDeltaY(-10)  ;
    }

    moveDown(){
        this.setDeltaY(+10) ;
    } 

    moveLeft(){
        this.setDeltaX(-10) ;
    }

    moveRight(){
        this.setDeltaX(+10) ;
    }


    draw(context){
        context.fillStyle = "#87CEEB";
        this.#segments.forEach(segment => context.fillRect(segment.x, segment.y, 20, 20));
    }

    // that's not correct.
    // because if the snake goes down just the head will go down but the last parts will move normally not down.
    
    // basic version just to test if the snake moves :
    // notre head est toujours le premier element de segments.
    // segments[0] is the head.

    move(){
        this.#segments[0].x += this.#deltaX ;
        this.#segments[0].y += this.#deltaY ;
    }

}