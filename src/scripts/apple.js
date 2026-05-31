// i can create three types of apples :
// first one is the simple apple that grows the apple when eaten it.
// the second one is the killer apple when the snake eat it the length will decrease.
// the third one is the apple that changes the colour of the snake. 

export default class Apple{
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

    setX(value){
        this.#x = value ; 
    }
    
    setY(value){
        this.#y = value ; 
    }

}