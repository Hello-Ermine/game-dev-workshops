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
        // this.load.image('background', 'src/image/tileSprite.png');
        // this.load.image('player', 'src/image/Boss.jpg');

        this.load.image('bg', 'src/image/objectClass/backGround.png');
        this.load.spritesheet('player', 'src/image/objectClass/playerErmine.png',
                                { frameWidth: 500, frameHeight: 300 });

    }

    create() {
        // background = this.add.tileSprite(0, 0, 450, 720, 'background');
        // background.setOrigin(0,0);
        // background.setScale(1.88);

        // player = this.add.sprite(226, 350, 'player');
        // player.setScale(0.2);

        background = this.add.image(150, 150, 'bg');
        background.setScale(1.6);

        player = this.add.sprite(200, 200, 'player');
        player.setScale(0.25)
    }

    update(delta, time) {
        // background.tilePositionY -= 0.5;
        
    }
}
export default GameScene;
