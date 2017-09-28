import GameStartState from "states/gamestart/GameStartState";
import GamePlayState from "states/game/GamePlayState";
import GameoverState from "states/gameover/GameoverState"

class CasualPlatform extends Phaser.Game{
    constructor() {
        // Setup the game's stage.
        super({
            width: 800,
            height: 600,
            renderer: Phaser.AUTO
        });

        this.state.add('GameStartState', GameStartState);
        this.state.add('GamePlayState', GamePlayState);
        this.state.add('GameoverState', GameoverState);
    }

    play(stateKey?: string) {
        if (!stateKey) {
            this.state.start('GamePlayState');
        } else {
            this.state.start(stateKey);
        }
    }
}

var game = new CasualPlatform().play('GamePlayState');