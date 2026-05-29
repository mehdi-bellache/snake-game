

export default class Segment{
    #x ;
    #y ;

    constructor(x, y){
        this.#x = x ;
        this.#y = y ; 
    }

    get x(){
        return this.#x ;
    }

    get y(){
        return this.#y ;
    }

    setX(x){
        this.#x = x ;
    }

    setY(y){
        this.#y = y ;
    }
}