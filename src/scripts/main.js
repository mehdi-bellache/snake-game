
import Game from './game.js';

const init = () => {

   const canvas = document.getElementById("playfield");

   const game = new Game(canvas);

   game.animate() ;

   window.addEventListener('keydown', game.keyDownActionHandler.bind(game)) ;
}

init();