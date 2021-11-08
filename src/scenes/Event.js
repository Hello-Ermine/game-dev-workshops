import Phaser from "phaser";

let S;
let R;
let spawn;
let spawnGroup;
let bullet;
let bulletGruop;

class Event extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Event'
        });
    }

    preload() {
        this.load.image('R', 'src/image/Rapid.png');
        this.load.image('S', 'src/image/Separate.png');
        this.load.image('bullet', 'src/image/Bullet.png');
    }

    create() {

    //   S = this.physics.add.image(800, 300, "S");
    //   spawnGroup = this.physics.add.group();
    //   spawn = this.time.addEvent({
    //       delay: 2000,
    //       callback: function () {
    //           R = this.physics.add.image(400, 300, "R");
    //           spawnGroup.add(R);
    //           spawnGroup.setVelocityX(200);
    //       },
    //       callbackScope: this,
    //       loop: true,
    //   });
 
    S=this.physics.add.image(700,300,'S').setImmovable();
    bulletGruop=this.physics.add.group();
//HEAD
        spawn=this.time.addEvent({​​​
        delay:2000,
        callback:function(){​​​
            bullet=this.physics.add.image(S.x,S.y,'bullet');
            bulletGruop.add(bullet);
            bulletGruop.setVelocityX(-200);
    //     this.physics.add.collider(bullet,R,(bullet,R)=>{​​​
    //               R.destroy();
    //               bullet.destroy();
    //     }​​​);
                            }​​​,
    callbackScope:this,
    loop:true
                }​​​);
//
    spawn=this.time.addEvent({
        delay:2000,
        callback:function(){
            bullet=this.physics.add.image(S.x,S.y,'bullet');
            bulletGruop.add(bullet);
            bulletGruop.setVelocityX(-200);
        },
        callbackScope:this,
        loop:true
    });
// c19863de77002ce0eddee7731de0578a4fc6ac3d
    spcaeBar=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   
  }

  update(delta, time) {
      for (let i = 0; i < spawnGroup.getChildren().length; i++) {
          if (spawnGroup.getChildren()[i].x > 500) {
              spawnGroup.getChildren()[i].destroy();
          }
      }
  }
}

   

    
export default Event;