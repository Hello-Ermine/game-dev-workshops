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
        this.load.image('bg','src/image/tileSprite.png');
        this.load.image('player','src/image/S A D C A T.jpg');
    }

    create() {
        bg = this.add.tileSprite(0,0,450,720,'bg');
        bg.setOrigin(0,0);
        bg.setScale(2);

        player = this.add.sprite(225,350,'player');
        player.setScale(0.3);
    }

    update(delta, time) {
        bg.tilePositionY -= 1;
    }
}
export default GameScene;
