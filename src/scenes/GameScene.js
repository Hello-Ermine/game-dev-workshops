import Phaser from "phaser";

let player;
let keyW;
let keyA;
let keyS;
let keyD;
let cursor;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('player', 'src/image/input/playerErmine.png',
        {frameWidth:500,frameHeight:300});

        
    }

    create() {
        
        playerani = this.physics.add.sprite(300,600,'player').setScale(0.5);

        // this.input.on('pointermove', (pointer)=>{
        //     player.x = pointer.x
        //     player.y = pointer.y  //ตั้งให้ตำแหน่งตัวละครไปตามเมาส์ของเรา
        // })

        
    }

    update(delta, time) {
        playerani.anims.play('player', true);
        // if(keyW.isDown){
        //     player.setVelocityY(-500);
        // }else if(keyS.isDown){
        //     player.setVelocityY(500);
        // }else{
        //     player.setVelocityY(0);
        // }
        // if(keyA.isDown){
        //     player.setVelocityX(-500);
        // }else if(keyD.isDown){
        //     player.setVelocityX(500);
        // }else{
        //     player.setVelocityX(0);
        // }


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
