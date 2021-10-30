import Phaser from "phaser";

let bg;
let player;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        //load image
        this.load.image('bg','src/image/objectClass/backGround.png');
        this.load.spritesheet(
            'player','src/image/objectClass/playerErmine.png',
            {frameWidth:500 , frameHeight:300}
        );

    }

    create() {       
        //create image
        bg = this.add.image(150,150,'bg').setScale(1.75);
        player = this.physics.add.sprite(200,200,'player').setScale(0.5);
    }

    update(delta, time) {
        
    }
}
export default GameScene;
