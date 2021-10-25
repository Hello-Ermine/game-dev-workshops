import Phaser from "phaser";

let bg;
let player;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/tileSprite.png');
        this.load.image('player', 'src/image/playerBoy.png');
    }

    create() {
       bg =  this.add.tileSprite(0,0,450,720,'bg');
       bg.setOrigin(0,0);
       bg.setScale(3);

       player = this.add.sprite(225, 360, 'player');
       player.setScale(2);

    }

    update(delta, time) {
        bg.tilePositionY += 1;
        
    }
}
export default GameScene;
