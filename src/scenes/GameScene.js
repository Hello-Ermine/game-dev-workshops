import Phaser from "phaser";

let bg;
let player;
let ball;
let ermin

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        //load image
        this.load.image('bg','src/image/objectClass/backGround.png');
        


        //load spritesheet
        this.load.spritesheet('ermine','src/image/objectClass/playerErmine.png',
        { frameWidth:500, frameHeight:300}); 
        
    }

    create() {
        //create image object (background)
        // // bg = this.add.image(150,150,'bg');
        // bg.setScale(1.75);

        bg = this.add.tileSprite(0,0,450,720,'bg').setOrigin(0,0);


        //create sprite object (player)
        ermine = this.physics.add.sprite(200,200,'ermine').setScale(0.25);
        this.anims.create({

            key: 'ermineAni',

            frames: this.anims.generateFrameNumbers('ermine',{

                start:0,

                end:2

            }),

            duration: 1000,

            repeat:5

        })

        ermine.anims.play('ermineAni',true);

       
    }

    update(delta, time) {
        bg.tilePositionX += 2;

    }
}
export default GameScene;
