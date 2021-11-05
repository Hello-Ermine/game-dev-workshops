import Phaser from "phaser";

let background;
let ermine;
let meow;
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

        // this.load.image('bg', 'src/image/objectClass/backGround.png');
        this.load.spritesheet('ermine', 'src/image/objectClass/playerErmine.png', { frameWidth: 500, frameHeight: 300 });
        this.load.spritesheet('meow', 'src/image/playermeow.jpg', { frameWidth: 500, frameHeight: 300 });

    }

    create() {


        ermine = this.physics.add.sprite(100, 500, 'ermine').setScale(0.5).setDepth(99);
        meow = this.physics.add.sprite(200, 100, 'meow').setScale(0.5);
        meow.setVelocityY(200);


        this.anims.create({
            key: 'ermineAni',
            frames: this.anims.generateFrameNumbers('ermine', {
                start: 0,
                end: 2
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })
        
        

        // background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0);
        ermine.anims.play('ermineAni', true)

        // this.input.on('pointermove',(pointer)=>{
        //     ermine.x = pointer.x
        //     ermine.y = pointer.y
        // })

        ermine.setCollideWorldBounds(true)
        this.physics.add.collider(ermine, meow, () =>{
            meow.setVisible();

        });

        // cursor = this.input.keyboard.createCursorKeys();


        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }
    update(delta, time) {

        // background.tilePositionX += 2;

        // if (cursor.up.isDown) {
        //     ermine.setVelocityY(-500);
        // } else if (cursor.down.isDown) {
        //     ermine.setVelocityY(500);
        // } else {
        //     ermine.setVelocityY(0);
        // }
        // if (cursor.left.isDown) {
        //     ermine.setVelocityX(-500);
        // } else if (cursor.right.isDown) {
        //     ermine.setVelocityX(500);
        // } else {
        //     ermine.setVelocityX(0);
        // }

        if (keyW.isDown) {
            ermine.setVelocityY(-500);
        } else if (keyS.isDown) {
            ermine.setVelocityY(500);
        } else {
            ermine.setVelocityY(0);
        }
        if (keyA.isDown) {
            ermine.setVelocityX(-500);
        } else if (keyD.isDown) {
            ermine.setVelocityX(500);
        } else {
            ermine.setVelocityX(0);
        }



    }
}
export default GameScene;