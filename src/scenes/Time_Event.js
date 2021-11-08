import Phaser from "phaser";

let spawn;

let r;
let s;

let bullet;
let bulletGroup;

class Time_Event extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Time_Event'
        });
    }

    preload() {
        this.load.image('r', 'src/image/Rapid.png');
        this.load.image('s', 'src/image/Separate.png');

        this.load.image('bullet', 'src/image/Bullet.png');
    }

    create() {
        s = this.physics.add.image(840, 300, 's');
        s.setImmovable();

        r = this.physics.add.image(240, 300, 'r');
        r.setImmovable();

        bulletGroup = this.physics.add.group();
        spawn = this.time.addEvent({
            delay: 1000,
            callback: function () {
                bullet = this.physics.add.image(s.x - 100, s.y, 'bullet');
                bullet.setScale(0.5);

                bulletGroup.add(bullet);
                bulletGroup.setVelocityX(-200);

                //this.physics.add.collider(r, bullet, (r, bullet) => {
                //r.destroy();
                //bullet.destroy();
                //});
            },
            callbackScope: this,
            loop: true,
            paused: false
        });
    }

    update(delta, time) {

        this.physics.add.collider(r, bullet, (r, bullet) => {
            bullet.destroy();
            spawn.paused = true;
        });

        for (let i = 0; i < bulletGroup.getChildren().length; i++) {
            if (bulletGroup.getChildren()[i].x < 0) {
                bulletGroup.getChildren()[i].destroy();
            }
        };
    }
}
export default Time_Event;
