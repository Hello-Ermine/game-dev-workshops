import Phaser from "phaser";

let spawn;
let bullet;
let R;
let S;
let bulletGroup;
let spawnGroup;
let spcaeBar;

class Event extends Phaser.Scene {
    constructor(test) {
        super({
            key: "Event",
        });
    }
    preload() {
        this.load.image("R", "src/image/Rapid.png");
        this.load.image("S", "src/image/Separate.png");
        this.load.image("bullet", "src/image/Bullet.png");
    }
    create() {
        S = this.physics.add.image(700, 300, "S").setImmovable();
        spawnGroup = this.physics.add.group();
        spawn = this.time.addEvent({
            delay: 1000,
            callback: function () {
                R = this.physics.add.image(
                    Phaser.Math.Between(300, 500),
                    Phaser.Math.Between(300, 500),
                    "R"
                );
                spawnGroup.add(R);
                spawnGroup.setVelocityX(200);
                this.physics.add.collider(S, R, (S, R) => {
                    R.destroy();
                });
            },
            callbackScope: this,
            pause: true,
            loop: true,
        });
        spcaeBar = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
    }
    update(delta, time) {
        if (spcaeBar.isDown) {
            bullet = this.physics.add.image(S.x, S.y, "bullet").setScale(0.5);
            spawnGroup.add(bullet);
            spawnGroup.setVelocityX(-200);
            this.physics.add.collider(bullet, R, (bullet, R) => {
                R.destroy();
                bullet.destroy();
            });
        }
        for (let i = 0; i < spawnGroup.getChildren().length; i++) {
            if (spawnGroup.getChildren()[i].x > 900) {
                spawnGroup.getChildren()[i].destroy();
            }
        }
    }
}

export default Event;
