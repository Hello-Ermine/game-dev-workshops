import Phaser from "phaser";

let bg;
let ermine;
let ball;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/objectClass/backGround.png');
        this.load.spritesheet('ermine', 'src/image/objectClass/playerErmine.png',
            { frameWidth: 500, frameHeight: 300 });
    }

    create() {
        bg = this.add.tileSprite(0, 0, 450, 720, 'bg');
        bg.setOrigin(0, 0);

        ermine = this.physics.add.sprite(200, 500, 'ermine').setScale(0.5).setOffset(0, 0);

        this.anims.create({
            key: 'ermineAni',
            frames: this.anims.generateFrameNumbers('ermine',{
                start: 0,
                end: 2
            }),
            duration: 300,
            repeat: -1
        })

    }


    update(delta, time) {
        bg.tilePositionX += 20;
        ermine.anims.play('ermineAni', true);

    }
}
export default GameScene;
