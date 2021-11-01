import Phaser from "phaser";

<<<<<<< HEAD
let background;
let ermine;
=======

>>>>>>> origin/input

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
<<<<<<< HEAD
        this.load.image('bg','src/image/objectClass/backGround.png');
        this.load.spritesheet('ermine', 'src/image/objectClass/playerErmine.png',
            { frameWidth: 500, frameHeight: 300 });
    }

    create() {
        background = this.add.tileSprite(0,0,450,720,'bg').setOrigin(0,0);
        ermine = this.physics.add.sprite(220, 500, 'ermine').setScale(0.5);

        this.anims.create({
            key: 'ermineAni',
            frames: this.anims.generateFrameNumbers('ermine',{
                start: 0,
                end: 7
            }),
            duration: 1000,
            repeat:-1
        })
        ermine.anims.play('ermineAni',true);
=======
        

    }

    create() {
        
>>>>>>> origin/input

    }

    update(delta, time) {
<<<<<<< HEAD
        background.tilePositionX += 2;
=======
        
>>>>>>> origin/input

    }
}
export default GameScene;
