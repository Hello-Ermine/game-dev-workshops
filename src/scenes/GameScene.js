import Phaser from "phaser";

let background;
let ermine;
let boom;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        // this.load.image('background', 'src/image/tileSprite.png');
        // this.load.image('player', 'src/image/Boss.jpg');

        this.load.image('bg', 'src/image/objectClass/backGround.png');

        // this.load.image('football', 'src/image/objectClass/football.png');
        // this.load.image('basketball', 'src/image/objectClass/basketball.png');
        // this.load.image('volleyball', 'src/image/objectClass/volleyball.png');
        // this.load.image('takraw', 'src/image/objectClass/Takraw.png');

        this.load.spritesheet('ermine', 'src/image/objectClass/playerErmine.png',
            { frameWidth: 500, frameHeight: 300 });
        this.load.spritesheet('boom', 'src/image/Boom.png',
            { frameWidth: 105, frameHeight: 99 });


    }

    create() {
        // background = this.add.tileSprite(0, 0, 450, 720, 'background');
        // background.setOrigin(0,0);
        // background.setScale(1.88);

        // player = this.add.sprite(226, 350, 'player');
        // player.setScale(0.2);

        background = this.add.tileSprite(0, 0, 1280, 720, 'bg');
        background.setOrigin(0, 0);

        ermine = this.physics.add.sprite(100, 450, 'ermine');
        ermine.setScale(0.4);

        boom = this.physics.add.sprite(300, 450, 'boom');
        boom.setScale(1);

        this.anims.create({ 
            key: 'ermineAni', 
            frames: this.anims.generateFrameNumbers('ermine', { 
                start: 0, 
                end: 2 
            }),
            duration: 400, 
            framerate: 0,
            repeat: -1 
        })

        this.anims.create({ 
            key: 'boomAni', 
            frames: this.anims.generateFrameNumbers('boom', { 
                start: 0, 
                end: 24 
            }),
            duration: 1500, 
            framerate: 0,
            repeat: 0
        })

        // ball = this.physics.add.group();
        // ball.create(250, 250, 'football').setScale(0.1);
        // ball.create(300, 300, 'basketball').setScale(0.1);
        // ball.create(200, 200, 'volleyball').setScale(0.1);
        // ball.create(350, 350, 'takraw').setScale(0.1);

    }

    update(delta, time) {
        background.tilePositionX += 2;
        ermine.anims.play('ermineAni', true);
        boom.anims.play('boomAni', true);
    }
}
export default GameScene;
