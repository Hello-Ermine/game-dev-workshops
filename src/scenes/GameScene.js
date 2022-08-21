import Phaser from "phaser";

let mario;
let marioDead;
let cursor;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('mario','src/image/mario.png',
        { frameWidth: 329.875 , frameHeight: 523}); 
        this.load.spritesheet('marioDead','src/image/marioDead.png',
        { frameWidth: 669 , frameHeight: 569}); 

    }

    create() {
        mario = this.add.sprite(425, 700, 'mario').setScale(0.35);
        this.anims.create({
            key: 'marioRun',
            frames: this.anims.generateFrameNumbers('mario', {
                start: 0,
                end: 7
            }),
            duration: 800,    
            repeat: -1
        })

        // marioDead = this.add.sprite(300, 700, 'marioDead').setScale(0.35);
        // this.anims.create({
        //     key: 'marioDead',
        //     frames: this.anims.generateFrameNumbers('marioDead', {
        //         start: 0,
        //         end: 9
        //     }),
        //     duration: 800,    
        //     repeat: -1
        // })

        cursor = this.input.keyboard.createCursorKeys();

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
        // marioDead.anims.play('marioDead', true)
    }
}
export default GameScene;
