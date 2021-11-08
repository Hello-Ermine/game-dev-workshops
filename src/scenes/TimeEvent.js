import Phaser from "phaser";

let spawn;
let R;
let S;
let bulletGroup;
let bullet;
let spaceBar;




class TimeEvent extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TimeEvent'
        });
    }

    preload() {
        this.load.image('R','src/image/Rapid.png');
        this.load.image('S','src/image/Separate.png');
        this.load.image('bullet','src/image/Bullet.png');
        
        
        
    }

    create() {

        S = this.physics.add.image(700,300,'S');
        S.setImmovable();

        bulletGroup = this.physics.add.group()
        spawn = this.time.addEvent({
            delay:2000,
            callback: function(){
                //code
                // bullet=this.physics.add.image(S.x,S.y,'bullet');
                // bulletGroup.add(bullet);
                // bulletGroup.setVelocityX(-200);
                

                
            },
            callbackScope:this,
            loop:true  
        });


        // spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        


     

        
        

    }

    update(delta, time) {

        if(Phaser.Input.Keyboard.JustDown(SPACE)){
            bullet = this.physics.add.image(S.x,S.y,'bullet').setScale(0.5);
            bulletGroup.add(bullet);
            bulletGroup.setVelocityX(-200);

        }

        for(let i=0;i<bulletGroup.getChildren().length;i++){

            if(bulletGroup.getChildren()[i].x<0){

                bulletGroup.getChildren()[i].destroy();

            }
            

        }
        

        
    }
}
export default TimeEvent;
