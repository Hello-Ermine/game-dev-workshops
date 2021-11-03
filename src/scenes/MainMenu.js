import Phaser from "phaser";

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
       buttonPlay = this.add.image(650, 350, 'play');
       buttonPlay.setScale(0.5);

       buttonPlay.setInteractive();
       buttonPlay.on('pointerup', ()=>{
           this.scene.start('GameScene');
       });
    }

    update(delta, time) {
       
    }
}
export default MainMenu;
