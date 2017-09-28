/**
 * 
 */
import State from "states/StateAbstract";

export default class GameStartState extends State {
    preload() {
        this.game.load.image('background', 'assets/start.bmp');
    }
    create() {
        this.game.add.sprite(0, 0, 'background');

        this.game.add.text(this.game.width / 2.5, 20, 'Shooters');
        
        let startText = this.game.add.text((this.game.width / 2) - 10, this.game.height / 2.5, 'Start');
        startText.inputEnabled = true;
        startText.events.onInputOver.add((item :Phaser.Text) => {
            document.body.style.cursor = 'pointer';
            item.addColor('#f00', 0);
        }, this);
        startText.events.onInputDown.add(() => {
            document.body.style.cursor = 'default';
            this.game.state.start('GamePlayState');
        });
        startText.events.onInputOut.add((item :Phaser.Text) => {
            document.body.style.cursor = 'default';
            item.clearColors();
        }, this)
    }
    update() {}
}