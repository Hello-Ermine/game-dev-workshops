import Phaser from "phaser";

let ;


class Time_event extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Time_event'
        });
    }

    preload() {
        this.load.image('R', 'src/image/Rapid.png');
        this.load.image('S', 'src/image/Separate.png');
        this.load.image('bullet', 'src/image/Bulle.png');
    }

    create() {
    
      spawn=this.time.addEvent({
          delay:2000,
          callback: function(){

          }
          
      });

    

        
    }
    update(delta, time) {
        
        

    }
}
export default Time_event;