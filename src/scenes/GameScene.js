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
        this.load.image('bg','src/image/objectClass/backGround.png')
        //load spritesheet object (player)
        this.load.spritesheet('ermine','src/image/objectClass/playerErmine.png',
            {frameWidth:500,frameHeight:300});
    }

    create() {
        //create image object (background)
        background = this.add.tileSprite(0,0,850,1400,'bg').setOrigin(0,0);
        //create sprite object (player)
        ermine = this.physics.add.sprite(200,500,'ermine').setScale(0.5);
        
        this.anims.create({
            key:'ermineAni',
            frames: this.anims.generateFrameNumbers('ermine',{
                start: 0,
                end: 2
            }),
            duration: 200,
            repeat: -1
        });
        ermine.anims.play('ermineAni',true);
    }

    update(delta, time) {
        background.tilePositionX += 15;
        
    }
}
export default GameScene;
