

let play;

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
        play.on('pointerup',()=>{
            this.scene.start('GameScene')  
            menusound.stop()  
        
    }
    
    
    update() {
        
    }
}
export default MainMenu; 