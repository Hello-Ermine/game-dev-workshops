import Phaser from "phaser";

let R;
let S;
let bullet;
let bulletGroup;
let spawn;
let spaceBar;

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
        S = this.physics.add.image(700, 300, 'S').setImmovable();

        bulletGroup = this.physics.add.group();

        spawn = this.time.addEvent({

            delay: 2000,

            callback: function () {

                bullet = this.physics.add.image(S.x, S.y, 'bullet');

                bulletGroup.add(bullet);

                bulletGroup.setVelocityX(-200);

                //     this.physics.add.collider(bullet,R,(bullet,R)=>{

                //               R.destroy();

                //               bullet.destroy();

                //     });

            },

            callbackScope: this,

            loop: true

        });
        spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(delta, time) {
        if (spaceBar.isDown) {

            bullet = this.physics.add.image(S.x, S.y, 'bullet').setScale(0.5);

            bulletGroup.add(bullet);

            bulletGroup.setVelocityX(-200);

            this.physics.add.collider(bullet, R, (bullet, R) => {

                R.destroy();

                bullet.destroy();

            });

        }



        for (let i = 0; i < bulletGroup.getChildren().length; i++) {

            if (bulletGroup.getChildren()[i].x > 900) {

                bulletGroup.getChildren()[i].destroy();

            }

        }

    }
}
export default Event;