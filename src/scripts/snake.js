
export default class Snake{
    #x ;
    #y ;
    #deltaX ;
    #deltaY ;
    #segments ; 

    constructor(x, y, deltaX= 0, deltaY = 0){
        this.#x = x ;
        this.#y = y ; 
        this.#deltaX = deltaX ;
        this.#deltaY = deltaY ;
        this.#segments = [] ;
    }

    get x(){
        return this.#x ;
    }

    get y(){
        return this.#y ;
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

    setX(value){
        this.#x = value ;
    }

    setY(value){
        this.#y = value ;
    }

    setDeltaX(value){
        this.#deltaX = value ; 
    }

    setDeltaY(value){
        this.#deltaY = value ; 
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

    move(canvas){
        this.#x += this.#deltaX;
        this.#y += this.#deltaY;
        this.#segments.forEach( segment => {
            segment.x += this.#deltaX;
            segment.y += this.#deltaY ; });
    }

}