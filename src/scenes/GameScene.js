import Phaser from "phaser";

let player;
let cursor;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('player','src/image/playBoy.png',
        { frameWidth: 329.875 , frameHeight: 523}); 
        this.load.spritesheet('marioDead','src/image/marioDead.png',
        { frameWidth: 669 , frameHeight: 569}); 

    }

    create() {
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

    }
    
}
export default GameScene;
   // marioDead.anims.play('marioDead', true)