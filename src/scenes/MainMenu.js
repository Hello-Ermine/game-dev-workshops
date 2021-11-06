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
    
       buttonPlay = this.add.image(250,300, 'play').setScale(0.5);

       buttonPlay.setInteractive();



       buttonPlay.on('pointerup', ()=>{

           this.scene.start('GameScene');

       })

        buttonPlay.on('pointerover', ()=>{
        setScale(1);

    })

        
    }
    update(delta, time) {
        
        

    }
}
export default MainMenu;
