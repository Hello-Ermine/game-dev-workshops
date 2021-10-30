import Phaser from "phaser";

let background;
let player;
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
        this.load.image('basket','src/image/objectClass/basketball.png');
        this.load.image('volley','src/image/objectClass/volleyball.png');
        this.load.image('takraw','src/image/objectClass/Takraw.png');
        // load spritesheet
        // this.load.spritesheet('player','src/image/objectClass/playerErmine.png',
        //                                 {frameWidth:500,frameHeight:300});
        // load tileSprite
        
    }

    create() {
        // create image object (background)
        // background = this.add.image(150,150,'bg').setScale(1.75);
        // create sprite object (player)
        // player = this.add.sprite(200,200,'player');
        // player.setScale(0.5);
        // create tileSprite
        // background = this.add.tileSprite(0,0,450,720,'bg').setOrigin(0,0);
        // create group obj
        ball = this.physics.add.group();
        ball.setScale(0.1);
        ball.create(250,250,'football');
        ball.create(300,300,'basket');
        ball.create(200,200,'volley');
        ball.create(350,350,'takraw');
        

    }

    update(delta, time) {
        // background.tilePositionX += 2;
    }
}
export default GameScene;
