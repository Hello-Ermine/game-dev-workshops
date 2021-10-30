import Phaser from "phaser";

let background;
let player;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('background', 'src/image/tileSprite.png');
        this.load.image('player', 'src/image/Boss.jpg');
    }

    create() {
        background = this.add.tileSprite(0, 0, 450, 720, 'background');
        background.setOrigin(0,0);
        background.setScale(1.88);

        player = this.add.sprite(226, 350, 'player');
        player.setScale(0.2);
    }

    update(delta, time) {
        background.tilePositionY -= 0.5;
    }
}
export default GameScene;
