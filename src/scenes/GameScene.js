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
        // this.load.image('bg', 'src/image/tileSprite.png');
        // this.load.image('player', 'src/image/playermeow.jpg');
        this.load.image('bg', 'src/image/objectClass/backGround.png');
        this.load.spritasheet('player', 'src/image/objectClass/playerErmine.png',
                                            {frameWidth:500,frameHeight:300});

    }

    create() {
        //bg = this.add.tileSprite(0,0,450,720,'bg');
        //bg.setOrigin(0,0);
        //bg.setScale(2);

        // player = this.add.sprite(220,350,'player');
        // player.setScale(0.5);

        background = this.add.tileSprite(0,0,450, 150, 'bg').setScale(1.75);
        player = this.add.sprite(200,200,'player');
        player.setScale(0.25);
    }

    update(delta, time) {
        // bg.tilePositionY -= 1;
        background.tilePositionX -=5;
    }
}
export default GameScene;
