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
        this.load.spritesheet('player','src/image/playerSpritesheet.png',
        {frameWidth: 669 , frameHeight: 569});
    }

    create() {
    
        player = this.physics.add.sprite(200, 500, 'player').setScale(0.5); 
        this.anims.create({
            key: 'playerAni',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 7
            }),
            duration: 800,    
            repeat: -1
        })

        cursor = this.input.keyboard.createCursorKeys();


    }

    update(delta, time) {
        player.anims.play('playerAni', true);
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
