import Phaser from "phaser";

let ObjectR;
let bullet;
let bulletEvent;
let bulletGroup;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: "GameScene",
        });
    }

    preload() {
        this.load.image('ObjR', 'src/image/Rapid.png');
        this.load.image('bullet', 'src/image/Bullet.png');
    }

    create() {
        ObjectR = this.physics.add.image(225, 645, "ObjR");
        

        bulletGroup = this.physics.add.group();

        bulletEvent = this.time.addEvent({
            delay: 1000,
            callback: function(){ 
                bullet = this.physics.add.image(ObjectR.x, ObjectR.y-50,'bullet');
                bullet.setScale(0.2)      
                bullet.setSize(0.2);      
                bulletGroup.add(bullet);
                bulletGroup.setVelocityY(-200);
                },
            callbackScope: this,
            loop: true,
            pause: false
    })
}

    update(delta, time) {
    for (let i = 0; i < bulletGroup.getChildren().length; i++) {
        if (bulletGroup.getChildren()[i].y <= -50) {
                bulletGroup.getChildren()[i].destroy();
        }
    }

    }
}
export default GameScene;
