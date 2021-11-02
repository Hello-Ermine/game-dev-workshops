import Phaser from "phaser";

let background;
let ermine;

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
        // this.load.image('background', 'src/image/tileSprite.png');
        // this.load.image('player', 'src/image/Boss.jpg');

        this.load.image('bg', 'src/image/objectClass/backGround.png');

        // this.load.image('football', 'src/image/objectClass/football.png');
        // this.load.image('basketball', 'src/image/objectClass/basketball.png');
        // this.load.image('volleyball', 'src/image/objectClass/volleyball.png');
        // this.load.image('takraw', 'src/image/objectClass/Takraw.png');

        this.load.spritesheet('ermine', 'src/image/objectClass/playerErmine.png',
            { frameWidth: 500, frameHeight: 300 });
    }

    create() {
        // background = this.add.tileSprite(0, 0, 450, 720, 'background');
        // background.setOrigin(0,0);
        // background.setScale(1.88);

        // player = this.add.sprite(226, 350, 'player');
        // player.setScale(0.2);

        background = this.add.tileSprite(0, 0, 1280, 720, 'bg');
        background.setOrigin(0, 0);

        ermine = this.physics.add.sprite(300, 500, 'ermine');
        ermine.setScale(0.4);

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

        ermine.anims.play('ermineAni', true);

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // ball = this.physics.add.group();
        // ball.create(250, 250, 'football').setScale(0.1);
        // ball.create(300, 300, 'basketball').setScale(0.1);
        // ball.create(200, 200, 'volleyball').setScale(0.1);
        // ball.create(350, 350, 'takraw').setScale(0.1);

    }

    update(delta, time) {
        background.tilePositionX += 5;
        if(keyW.isDown){
            ermine.setVelocityY(-500);
        }else if(keyS.isDown){
            ermine.setVelocityY(500);
        }else{
            ermine.setVelocityY(0);
        }
        if(keyA.isDown){
            ermine.setVelocityX(-500);
        }else if(keyD.isDown){
            ermine.setVelocityX(500);
        }else{
            ermine.setVelocityX(0);
        }
    }
}
export default GameScene;
