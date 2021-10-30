import Phaser from "phaser";

let bg,player,ball;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        /* this.load.image('bg', 'src/image/tileSprite.png');
         this.load.image('player', 'src/image/Pika.png'); */

        this.load.image('football', 'src/image/objectClass/football.png');
        this.load.image('basketball', 'src/image/objectClass/basketball.png');
        this.load.image('snowball', 'src/image/objectClass/snowball.png');
        this.load.image('takraw', 'src/image/objectClass/Takraw.png');
        this.load.image('volleyball', 'src/image/objectClass/volleyball.png');

        this.load.image('bg', 'src/image/objectClass/backGround.png');
        this.load.spritesheet('player', 'src/image/objectClass/playerErmine.png',{ frameWidth: 500, frameHeight: 300 });
    }

    create() {
        /* bg = this.add.tileSprite(0,0,450,720,'bg');
         bg.setOrigin(0,0);
         bg.setScale(2);
         player = this.add.sprite(225,620,'player');
         player.setScale(0.15); */
        
        bg = this.add.tileSprite(0,0,450,720,'bg').setDepth(1);
        bg.setOrigin(0,0);

        player = this.physics.add.sprite(100,500,'player').setDepth(10);
        player.setScale(0.35);
        this.anims.create({
            key: 'erminerun',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 2
            }),
            duration: 100,
            framerate: 0,
            repeat: -1 })
        }

        /*ball = this.physics.add.group();
            ball.create(200,200,'football');
            ball.create(200,200,'basketball');
            ball.create(200,200,'snowball');
            ball.create(200,200,'takraw');
            ball.create(200,200,'volleyball');
            ball.setScale(1);*/
    

    update(delta, time) {
        bg.tilePositionX += 10;
        player.anims.play('erminerun', true);
    }
}
export default GameScene;