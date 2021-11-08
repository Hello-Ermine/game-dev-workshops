import Phaser from "phaser";

let spawn;




class TimeEvent extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TimeEvent'
        });
    }

    preload() {
        this.load.image('R','src/image/Rapid.png');
        this.load.image('S','src/image/Separate.png');
        this.load.image('bullet','src\image\Bullet.png');
        
        
        
    }

    create() {
        spawn = this.time.addEvent({
            delay:2000,
            callback: function(){
                //code
                this.add.image(400,300,'R');
            },
            callbackscope:this,  
        });


     

        
        

    }

    update(delta, time) {
        

        
    }
}
export default TimeEvent;
