import Phaser from "phaser";

let buttonPlay;

class MainMenu extends Phaser.Scene {  //เปลี่ยนชื่อ Class เป็น MainMenu
    constructor(test) {
        super({
            key: 'MainMenu'  //กำหนด Key ใน Constructor ให้เป็น MainMenu
        });
    }

    preload() {
        this.load.image('play', ('src/image/input/play.png'))
    }

    create() {

        buttonPlay = this.add.image(250, 400, 'play').setScale(0.25);
        buttonPlay.setInteractive();
        buttonPlay.on('pointerup', () =>{
            this.scene.start('GameScene');


        })

    }


    update() {

    }
}

export default MainMenu;  //เปลี่ยนค่าตรง export default ให้เป็น MainMenu