import Phaser from "phaser";

let background;
let ermine;
let ball;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        // load image
        this.load.image('bg','src/image/objectClass/backGround.png');
        this.load.image('football','src/image/objectClass/football.png');
        this.load.image('basketball','src/image/objectClass/basketball.png');
        this.load.image('snowball','src/image/objectClass/snowball.png');
        this.load.image('Takraw','src/image/objectClass/Takraw.png');
        this.load.image('volleyball','src/image/objectClass/volleyball.png');
        // load spritesheet
        this.load.spritesheet('ermine','src/image/objectClass/playerErmine.png',
                                        {frameWidth:500,frameHeight:300});
        //load tileSprite
    }

    create() {
        // create image object (background)
        //background = this.add.image(150,150,'bg').setScale(1.75);
        //create tileSprite
        background = this.add.tileSprite(0,0,450,720,'bg').setOrigin(0,0);
        // create sprite object (player)
        ermine = this.physics.add.sprite(250,450,'ermine');
        ermine.setScale(0.5);
        
        this.anims.create({
            key: 'ermineAni',
            frames: this.anims.generateFrameNumbers('ermine',{
                start: 0,
                end:2
            }),
            duration:750,
            framerate: 0,
            repeat: -1
        })

        ermine.anims.play('ermineAni',true);
        
        //create group obj
        //ball = this.physics.add.group()
        //ball.create(250,250,'football');
        //ball.create(250,250,'basketball');
        //ball.create(250,250,'snowball');
        //ball.create(250,250,'Takraw');
        //ball.create(250,250,'volleyball');
        
    }

    update(delta, time) {
        background.tilePositionX += 3;
        
    }
}
export default GameScene;
