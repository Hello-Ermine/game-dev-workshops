import Phaser from "phaser";

let playButton; // ประกาศตัวแปร

class MainMenu extends Phaser.Scene {
    // ทำการเปลี่ยนชื่อ Class เป็น MainMenu
    constructor(test) {
        super({
            key: "MainMenu", //กำหนด Key ใน Constructor ให้เป็น MainMenu
        });
    }

    preload() {
        //เตรียมรูปปุ่มกด
        this.load.image("playButton", "src/image/playButton.png"); 
    }

    create() {
        //โหลดรูปปุ่มกดมาและจัดตำแหน่งแกน x,y และทำการ set ขนาดภาพ
        playButton = this.add.image(375, 360, "playButton").setScale(0.5);

        //เป็นการทำให้เรามี interactive กับปุ่มกดได้
        playButton.setInteractive();
        // เมื่อกดปุ่มแล้วจะทำการเปลี่ยนหน้า scene
        playButton.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
    }

    update() {}
}

export default MainMenu; //เปลี่ยนค่า export default ให้เป็น MainMenu
