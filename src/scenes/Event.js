import Phaser from "phaser";

let spawn;
let spawnGroup;
let R;
let S;
let bulletGroup;
let spaeBar;




class GameScene extends Phaser.Scene {

    constructor(test) {

        super({

            key: 'Event'

        });

    }



    preload() {
        this.load.image('R','src/image/Rapid.png');
        this.load.image('S','src/image/Separate.png');
        this.load.image('bullet','src/image/Bullet.png');
        
    }



    create() {
        S = this.physics.add.image(700,300,'S').setImmovable();

        bulletGroup = this.physics.add.group();

                 spawn = this.time.addEvent({

                     delay : 2000 ,

                     callback : function(){

                         bullet = this.physics.add.image(S.x,S.y,'bullet').setScale(0.5);
                         bulletGroup.add(bullet);
                         bulletGroup.setVelocityX(200);
                                // this.physics.collider(bullet,R,(bullet,R)=>{
                                //     R.destroy();
                                //     bulltet.destroy();
                                // });

                    },

                    callbackScope : this,
                    loop : true



                });
                spaeBar=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

                S=this.physics.add.image(700,300,'S').setImmovable();

          spawnGroup=this.physics.add.group();

              spawn=this.time.addEvent({

                        delay:1000,

                        callback: function(){

                                  R=this.physics.add.image(Phaser.Math.Between(300,500),Phaser.Math.Between(300,500),'R');

                                  spawnGroup.add(R);

                                  spawnGroup.setVelocityX(200);

                                  this.physics.add.collider(S,R,(S,R)=>{

                                            R.destroy();

                                        });

                        },

                        callbackScope:this,

                        loop:true,

                        pause:false

              });

              spcaeBar=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }



    update(delta, time) {
        for(let i=0;i<monsterGroup.getChildren().length;i++){
            if(monsterGroup.getChildren()[i].x>700){
                monsterGroup.getChildren()[i].destroy();

            }
        
        }

        if(spcaeBar.isDown){
            bullet=this.physics.add.image(S.x,S.y,'bullet').setScale(0.5);
            bulletGruop.add(bullet);
            bulletGruop.setVelocityX(-200);
            this.physics.add.collider(bullet,R,(bullet,R)=>{
                      R.destroy();
                      bullet.destroy();

            });

  }
       for(let i=0;i<spawnGroup.getChildren().length;i++){
         if(spawnGroup.getChildren()[i].x>900){
          spawnGroup.getChildren()[i].destroy();
        }

       }
    }

}

export default GameScene;