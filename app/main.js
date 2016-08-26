import Phaser from './Phaser';

import GameState from './GameState';


class Game extends Phaser.Game {

  constructor() {
    super(800, 600, Phaser.AUTO, 'content', null);
    this.state.add('GameState', GameState, false);
    this.state.start('GameState');
    this.core; // here all logick nad event;
    this.objects = {} //Here all objects link;
  }

}

new Game();
