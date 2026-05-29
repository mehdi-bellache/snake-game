
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

    // this version is incorrect, because of this.width and box.width.
    // move(box){
    //     this.setX( Math.max(0, Math.min(box.width - this.width, this.#x + this.#deltaX))) ;
    //     this.setY( Math.max(0, Math.min(box.height - this.height, this.#y + this.#deltaY))) ;
    // }

    move(canvas) {
        const prevX = this.#x;
        const prevY = this.#y;

        this.#x += this.#deltaX;
        this.#y += this.#deltaY;

        if (this.#segments.length > 0) {
            this.#segments[0].x = prevX;
            this.#segments[0].y = prevY;
        }
    }



    // move(canvas){
    //     this.#x += this.#deltaX;
    //     this.#y += this.#deltaY;
    //     this.#segments.forEach( segment => {
    //         segment.x += this.#deltaX;
    //         segment.y += this.#deltaY ; });
    // }

}