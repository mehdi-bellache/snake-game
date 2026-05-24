
import imgSrc from '../assests/images/snake2.png' ;

export default class Snake{
    #x ;
    #y ;
    #deltaX ;
    #deltaY ;
    #image ;

    constructor(x, y, deltaX= 0, deltaY = 0){
        this.#x = x ;
        this.#y = y ; 
        this.#deltaX = deltaX ;
        this.#deltaY = deltaY ;
        this.#image = this.#createImage(imgSrc) ;
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

    get image(){
        return this.#image ;
    }

    get width() {
        return this.#image.width ;
    }

    get height() {
        return this.#image.height ;
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

    setImage(newImgSrc){
        this.#image = this.#createImage(newImgSrc) ;
    }

    #createImage(imageSource) {
	    const newImg = new Image();
  	    newImg.src = imageSource;
  	    return newImg;
    }


    draw(context){
        context.drawImage(this.#image, this.#x, this.#y);
    }

    move(canvas){
        this.#x += this.#deltaX;
        this.#y += this.#deltaY;
    }

}