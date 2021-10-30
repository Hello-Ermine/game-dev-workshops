import Phaser from "phaser";

let bg;
let ermine;

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
        this.load.spritesheet('ermine', 'src/image/objectClass/playerErmine.png',
                                            {frameWidth:500,frameHeight:300});

    }

    create() {
        //bg = this.add.tileSprite(0,0,450,720,'bg');
        //bg.setOrigin(0,0);
        //bg.setScale(2);
        // player = this.add.sprite(220,350,'player');
        // player.setScale(0.5);
        bg = this.add.tileSprite(0,0,450, 150, 'bg').setScale(1.75).setDepth(2);;
        ermine = this.physics.add.sprite(200,200,'player');
        ermine.setScale(0.5).setDepth(5);

        this.anims.create({
            key: 'ermineAni',
            frames: this.anims.generateFrameNumbers('ermine', {
                start: 0,
                end: 2
            }),
            duration: 1000,
            repeat: -1
        })
    }
    update(delta, time) {
        // bg.tilePositionY -= 1;
        //background.tilePositionX -=5;

        ermine.anims.play('ermineAni', true);

    }
}
export default GameScene;
