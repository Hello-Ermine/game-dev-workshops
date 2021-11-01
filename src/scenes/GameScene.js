import Phaser from "phaser";
let background;
let ermine;
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
        

            background = this.add.tileSprite(0, 0, 850, 1400, 'bg').setOrigin(0, 0);
            ermine = this.physics.add.sprite(200, 500, 'ermine').setScale(0.5);
        //this.anims.create({
          //  key: 'ermineAni',
            //frames: this.anims.generateFrameNumbers('ermine',{
              //  start: 0,
                //end: 2
            //}),

            //duration: 1000,
            //framerate: 0,
            //repeat: -1
        //})

        //background = this.add.tileSprite(0,0,450,720,'bg').setOrigin(0,0);
        //ermine.anims.play('ermineAni',true)
       cursor = this.input.keyboard.createCursorKeys();
       player.setCollideWorldBounds(true)  
       keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
       keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
       keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
       keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    update(delta, time) {       
        if(cursor.up.isDown){
            player.setVelocityY(-500);
        }else if(cursor.down.isDown){
            player.setVelocityY(500);
        }else{
            player.setVelocityY(0);
        }
        if(cursor.left.isDown){
            player.setVelocityX(-500);
        }else if(cursor.right.isDown){
            player.setVelocityX(500);
        }else{
            player.setVelocityX(0);
        }
    }

}

export default GameScene;
