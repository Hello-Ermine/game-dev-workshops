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
        this.load.image('bg', 'src/image/titleSprite.png');
        this.load.image('player', 'src/image/Crimson.jpg');

    }

    create() {
        bg = this.add.titleSprite(0,0,450,720,'bg');
        bg.set0rigin(0,0);
        bg.setScale(2);
    }

    update(delta, time) {
        bg.titlePositionY -= 1;
    }
}
export default GameScene;
