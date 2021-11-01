import Phaser from "phaser";


let background;
let ermine;
let cursor;
let keyW;
let keyA;
let keyS;
let keyD;



class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {

        this.load.image('bg', 'src/image/objectClass/backGround.png');
        this.load.spritesheet('ermine', 'src/image/objectClass/playerErmine.png', { frameWidth: 500, frameHeight: 300 });

    }

    create() {

        background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0);

        ermine = this.physics.add.sprite(100, 500, 'ermine').setScale(0.5).setDepth(99);
        this.anims.create({
            key: 'ermineAni',
            frames: this.anims.generateFrameNumbers('ermine', {
                start: 0,
                end: 2
            }),
            duration: 700,
            framerate: 0,
            repeat: -1
        })

        ermine.setCollideWorldBounds(true)
        ermine.anims.play('ermineAni', true)

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


    }
    update(delta, time) {

        if (keyW.isDown) {

            ermine.setVelocityY(-500);

        } else if (keyS.isDown) {

            ermine.setVelocityY(500);

        } else {

            ermine.setVelocityY(0);

        }

        if (keyA.isDown) {

            ermine.setVelocityX(-500);

        } else if (keyD.isDown) {

            ermine.setVelocityX(500);

        } else {

            ermine.setVelocityX(0);

        }
        background.tilePositionX += 10;

    }
}
export default GameScene;