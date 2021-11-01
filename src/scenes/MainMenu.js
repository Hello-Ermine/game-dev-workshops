import Phaser from "phaser";

let play;
let background;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }
    preload() {
        this.load.image('bg', 'src/image/objectClass/backGround.png');
        this.load.image('play', './src/image/input/play.png');
    }
    create() {
        play = this.add.image(225, 650, 'play').setScale(0.2).setDepth(2)

        play.setInteractive();

        play.on('pointerup', () => {
            this.scene.start('GameScene')
        })

        background = this.add.tileSprite(0, 0, 450, 720, 'bg').setOrigin(0, 0).setDepth(1);
    }


    update() {
        background.tilePositionX += 5;

    }
}
export default MainMenu;