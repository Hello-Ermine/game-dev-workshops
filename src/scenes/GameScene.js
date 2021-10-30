import Phaser from "phaser";


let background;
let ermine;


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
       

        ermine = this.physics.add.sprite(100, 500, 'ermine').setScale(0.5).setDepth(99);
        this.anims.create({
            key: 'ermineAni',
            frames: this.anims.generateFrameNumbers('ermine',{
                start: 0,
                end: 2
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })

        background = this.add.tileSprite(0,0,450,720,'bg').setOrigin(0,0);
        ermine.anims.play('ermineAni',true)


        
    }

    update(delta, time) {
        
        background.tilePositionX += 2;

    }
}
export default GameScene;

