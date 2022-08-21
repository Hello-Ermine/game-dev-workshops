import Phaser from "phaser";

let bg;
let player;
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
        this.load.image('bg','../image/tileSprite.png');
        this.load.image('player', '../image/playermeow.jpg');
       

    }

    create() {
        bg = this.add.tileSprite(0,0,450,720,'bg');
        bg.setOrigin(0,0);
        bg.setScale(2);

        player = this.physics.add.sprite(450,600,'player');
        player.setScale(0.5);

        // this.input.on('pointermove', (pointer)=>{
        //     player.x = pointer.x
        //     player.y = pointer.y  //ตั้งให้ตำแหน่งตัวละครไปตามเมาส์ของเรา
        // })

        // cursor = this.input.keyboard.createCursorKeys();

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    update(delta, time) {
        bg.tilePositionY -= 1;

        // if(cursor.up.isDown){
        //     player.setVelocityY(-500);
        // }else if(cursor.down.isDown){
        //     player.setVelocityY(500);
        // }else{
        //     player.setVelocityY(0);
        // }
        // if(cursor.left.isDown){
        //     player.setVelocityX(-500);
        // }else if(cursor.right.isDown){
        //     player.setVelocityX(500);
        // }else{
        //     player.setVelocityX(0);
        // }

        if(keyW.isDown){
            player.setVelocityY(-500);
        }else if(keyS.isDown){
            player.setVelocityY(500);
        }else{
            player.setVelocityY(0);
        }
        if(keyA.isDown){
            player.setVelocityX(-500);
        }else if(keyD.isDown){
            player.setVelocityX(500);
        }else{
            player.setVelocityX(0);
        }

    }
}
export default GameScene;