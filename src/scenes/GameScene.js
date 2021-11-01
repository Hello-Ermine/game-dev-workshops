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


        //load spritesheet
        this.load.spritesheet('player','src/image/objectClass/playerErmine.png',
        { frameWidth:500, frameHeight:300}); 
        
    }

    create() {
        //create image object (background)
        bg = this.add.image(150,150,'bg');
        bg.setScale(1.75);


        //create sprite object (player)
        player = this.add.sprite(200,200,'player');
        player.setScale(0.5);
    }

    update(delta, time) {
        //bg.tilePositionY -= 1;
    }
}
export default GameScene;
