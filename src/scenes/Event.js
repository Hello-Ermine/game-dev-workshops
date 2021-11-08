import Phaser from "phaser";

let S;
let R;
let spawn;
let spawnGroup;


class Event extends Phaser.Scene {
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

      S = this.physics.add.image(800, 300, "S");
      spawnGroup = this.physics.add.group();
      spawn = this.time.addEvent({
          delay: 2000,
          callback: function () {
              R = this.physics.add.image(400, 300, "R");
              spawnGroup.add(R);
              spawnGroup.setVelocityX(200);
          },
          callbackScope: this,
          loop: true,
      });
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