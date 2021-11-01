import Phaser from "phaser";
import { PlayAnimation } from "phaser/src/actions";

let buttonPlay;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }
    preload() {
        this.load.image('play', 'src/image/input/play.png');

    }
    create() {
        buttonPlay = this.add.image(235,350, 'play').setScale(0.2);
        buttonPlay.setInteractive();

        buttonPlay.on('pointerup', ()=>{
            this.scene.start('GameScene');


        })



    }


    update() {

    }
}
export default MainMenu;
