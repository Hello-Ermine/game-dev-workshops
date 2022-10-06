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

    }

    create() {
        
 
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
