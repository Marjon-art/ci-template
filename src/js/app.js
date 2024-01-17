
// TODO: write your code here
import { Game, GameSavingData, writeGameSaving as saveGame, readGameSaving as loadGame  } from "./game.js";
import sum from './basic';
const game = new Game();
game.start();
console.log('worked');

console.log(sum([1, 2]));
console.log('app worked')
