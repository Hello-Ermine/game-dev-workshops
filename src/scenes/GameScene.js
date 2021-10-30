import Phaser from "phaser";
//let bg;
//let player;
let backGround;
let ermine;
//let bg;
//let player;
//let ball;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        //this.load.image('bg', 'src/image/titleSprite.png');
        //this.load.image('player', 'src/image/Crimson.jpg');
        //this.load.image('bg', 'src/image/objectClass/backGround.png');
        this.load.spritSheet('player','src/image/objectClass/playerErmine.png',{frameWidth:500,frameHeight:300});
        //this.load.image();
        /*this.load.image('football', 'src/image/objectClass/football.png');
        this.load.image('football', 'src/image/objectClass/basketball.png');
        this.load.image('football', 'src/image/objectClass/volleyball.png');
        this.load.image('football', 'src/image/objectClass/Takraw.png'); */
        //this.load.spritSheet('bird','src/image/objectClass/bird.png');
    }

    create() {
        //bg = this.add.titleSprite(0,0,450,720,'bg');
        //bg.setOrigin(0.0);
        //bg.setScale(2);

        //player = this.add.sprite(220,350,'player');
        //player.setScale(0.5);
        //backGround = this.add.image(150,150,'bg').setScale(1.75);
        //player = this.add.spite(200, 200, 'player');
        //player.setScale(0.5);
        //backGround = this.add.tileSprite(0,0,450,720,'bg').setOrigin(0,0);
        /*ball = this.physics.add.group()
        ball.create(250,250,'football');
        ball.create(300,300,'basket');
        
        ball.create(200,200,'volley');
        ball.create(350,350,'takraw'); */
        //player = this.physics.add.sprite(200,200,'player');
        //player.setScale(0.5).setOffset(400,300);
        backGround = this.add.titleSprite(0,0,850,1400, 'bg').setOrigin(0, 0);
        ermine = this.physics.add.sprite(200,200, 'ermine').setScale(0.25);
        this.anims.create({
            key: 'ermineAni',
            frames: this.anims.generateFrameNumber('ermine',{
                start:0,
                end:2
            }),
            duration: 1000,
            repeat: -1
        })
        ermine.anims.play('ermineAni',true);
    }

    update(delta, time) {
       // bg.titlePositionY -= 1;
       backGround.tilePositionX += 2;
       //ermine.anims.play('ermine',true);
    }
}
export default GameScene;
