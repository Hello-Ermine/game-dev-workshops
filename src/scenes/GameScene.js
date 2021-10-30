import Phaser from "phaser";

let bg,player,playerboy;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/objectClass/backGround.png');
        this.load.spritesheet('player', 'src/image/objectClass/playerErmine.png',{ frameWidth: 500, frameHeight: 300 });
        this.load.spritesheet('playerboy', 'src/image/playerBoy.png',{ frameWidth: 15, frameHeight: 21 });
    }

    create() {  
        bg = this.add.tileSprite(0,0,450,720,'bg').setDepth(1);
        bg.setOrigin(0,0);

        player = this.physics.add.sprite(60,500,'player').setDepth(10);
        player.setScale(0.35);
        this.anims.create({
            key: 'erminerun',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 2
            }),
            duration: 90,
            framerate: 0,
            repeat: -1 })
        
        playerboy = this.physics.add.sprite(80,420,'playerboy').setDepth(10);
        playerboy.setScale(4);
        this.anims.create({
            key: 'boyrun',
            frames: this.anims.generateFrameNumbers('playerboy', {
                start: 0,
                end: 8
            }),
            duration: 200,
            framerate: 0,
            repeat: -1 })
        }
    update(delta, time) {
        bg.tilePositionX += 12;
        player.anims.play('erminerun', true);
        playerboy.anims.play('boyrun', true);
    }
}
export default GameScene;