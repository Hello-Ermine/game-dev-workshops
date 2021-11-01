import Phaser from "phaser";

let bg, player;
let keyW, keyA, keyS, keyD, keyAtk;
//let cursor;
//let playerboy,playergirl;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/objectClass/backGround.png');
        this.load.spritesheet('player', 'src/image/objectClass/playerErmine.png', { frameWidth: 500, frameHeight: 300 });

        /*this.load.spritesheet('playerboy', 'src/image/playerBoy.png',{ frameWidth: 15, frameHeight: 21 });
        this.load.spritesheet('playergirl', 'src/image/playerGirl.png',{ frameWidth: 17, frameHeight: 21 });*/
    }

    create() {
        bg = this.add.tileSprite(0, 0, 450, 720, 'bg').setDepth(1);
        bg.setOrigin(0, 0);

        //Ermine
        player = this.physics.add.sprite(100, 500, 'player')
            .setDepth(10)
            .setScale(0.35)
            .setSize(300, 100)
            .setOffset(150, 140);

        //anims อนิเมชั่นขยับ
        this.anims.create({
            key: 'erminerun',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 2
            }),
            duration: 300,
            framerate: 0,
            repeat: -1
        })
        /*pointermove กลายเป็นเมาส์
        this.input.on('pointermove', (pointer)=>{
            player.x = pointer.x
            player.y = pointer.y
            })*/

        //cursor
        //cursor = this.input.keyboard.createCursorKeys();
        
        //keyboard
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyAtk = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        /*BOY
        playerboy = this.physics.add.sprite(150,420,'playerboy')
            .setDepth(10)
            .setScale(4)
            .setSize(12,20)
            .setOffset(1,1);
        this.anims.create({
            key: 'boyrun',
            frames: this.anims.generateFrameNumbers('playerboy', {
                start: 0,
                end: 8
            }),
            duration: 200,
            framerate: 0,
            repeat: -1 })
        
        //GIRL
        playergirl = this.physics.add.sprite(60,420,'playergirl')
            .setDepth(10)
            .setScale(4)
            .setSize(12,20)
            .setOffset(2,1);
        this.anims.create({
            key: 'girlrun',
            frames: this.anims.generateFrameNumbers('playergirl', {
                start: 0,
                end: 8
            }),
            duration: 200,
            framerate: 0,
            repeat: -1 })*/
        //ไม่ทำให้ player ออกนอกแมพ
        player.setCollideWorldBounds(true);
    }

    update(delta, time) {
        bg.tilePositionX += 4;
        player.anims.play('erminerun', true);
        /*playerboy.anims.play('boyrun', true);
        playergirl.anims.play('girlrun', true);*/

        /*if(cursor.up.isDown){
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
        }*/

        if (keyW.isDown) {
            player.setVelocityY(-500);
        } else if (keyS.isDown) {
            player.setVelocityY(500);
        } else {
            player.setVelocityY(0);
        }if (keyA.isDown) {
            player.setVelocityX(-500);
        } else if (keyD.isDown) {
            player.setVelocityX(500);
        } else {
            player.setVelocityX(0);
        }if (keyAtk.isDown){
            player.setVisible();
        } else if (keyAtk.isUp){
            player.setVisible(1);
        }

    }
}
export default GameScene;