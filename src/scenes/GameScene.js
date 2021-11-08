import Phaser from "phaser";

let bg;
let player;
let ball;
let ermine;
let cursor;
let keyW;
let keyA;
let keyS;
let keyD;
let meow;

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
        
        this.load.image('meow','src/image/playermeow.jpg');
        
    }

    create() {
        // //create image object (background)
        // // // bg = this.add.image(150,150,'bg');
        // // bg.setScale(1.75);

        bg = this.add.tileSprite(0,0,450,720,'bg').setOrigin(0,0);
        meow = this.physics.add.image(200,100,'meow').setScale(0.25);
        meow.setVelocityY = 2;
        


        


        //create sprite object (player)
         ermine = this.physics.add.sprite(200,200,'ermine').setScale(0.25);
         this.anims.create({
             

            key: 'ermineAni',

            frames: this.anims.generateFrameNumbers('ermine',{

                start:0,

                end:2

            }),

            duration: 1000,

            repeat:-1

        })

        ermine.anims.play('ermineAni',true);

        ermine.setCollideWorldBounds(true)

        this.physics.add.collider(ermine, meow);

        

    

        // this.input.on('pointermove',(pointer)=>{
        //     ermine.x = pointer.x
        //     ermine.y = pointer.y
        //})

       //cursor = this.input.keyboard.createCursorKeys();

       //Player Control
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


    }

    update(delta, time) {
         bg.tilePositionX += 2;

        // if(cursor.up.isDown){

        //     ermine.setVelocityY(-500);

        // }else if(cursor.down.isDown){

        //     ermine.setVelocityY(500);

        // }else{

        //     ermine.setVelocityY(0);

        // }

        // if(cursor.left.isDown){

        //     ermine.setVelocityX(-500);

        // }else if(cursor.right.isDown){

        //     ermine.setVelocityX(500);

        // }else{

        //     ermine.setVelocityX(0);

        // }

        if(keyW.isDown){

            ermine.setVelocityY(-500);

        }else if(keyS.isDown){

            ermine.setVelocityY(500);

        }else{

            ermine.setVelocityY(0);
            

        }

        if(keyA.isDown){

            ermine.setVelocityX(-500);

        }else if(keyD.isDown){

            ermine.setVelocityX(500);

        }else{

            ermine.setVelocityX(0);

        }

        
    }
}
export default GameScene;
