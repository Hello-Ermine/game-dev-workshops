class MainMenu extends Phaser.Scene {  //เปลี่ยนชื่อ Class เป็น MainMenu
    constructor(test) {
        super({
            key: 'MainMenu'  //กำหนด Key ใน Constructor ให้เป็น MainMenu
        });
    }
    preload() {
        this.load.image('play', 'src/image/input/play.png');
    }
    create() {            
    playButton = this.add.image(350, 500, 'play').setScale(0.8)    
    playButton.setInteractive();
    
    
    playButton.on('pointerup',()=>{
        this.scene.start('GameScene')  
        menusound.stop()
        })
    }
    
    
    update() {
        
    }
}
export default MainMenu;  //เปลี่ยนค่าตรง export default ให้เป็น MainMenu