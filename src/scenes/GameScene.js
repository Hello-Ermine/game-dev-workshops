import Phaser from "phaser";
let bg;
let player;

let bg;
let player;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        //this.load.image('bg', 'src/image/titleSprite.png');
        //this.load.image('player', 'src/image/Crimson.jpg');
        this.load.image('bg', 'src/image/objectClass/backGround.ng');
    }

    create() {
        //bg = this.add.titleSprite(0,0,450,720,'bg');
       // bg.setOrigin(0.0);
        //bg.setScale(2);

        //player = this.add.sprite(220,350,'player');
        //player.setScale(0.5);
        backGround = this.add.image(150,150,'bg').setScale(1.75);
    }

    update(delta, time) {
       // bg.titlePositionY -= 1;
    }
}
export default GameScene;
