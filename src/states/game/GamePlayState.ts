/**
 * GamePlayState
 */
import State from 'states/StateAbstract';

export default class GamePlayState extends State {
    player: Phaser.Sprite;
    cursors: Phaser.CursorKeys;
    map: Phaser.Tilemap;
    mapLayer: Phaser.TilemapLayer;

    preload() {
        this.game.load.tilemap('de_dust2', 'assets/maps/de_dust2/map.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'assets/maps/de_dust2/tile.bmp');
        this.game.load.image('player', 'assets/player0.bmp')
    }

    create() {  
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.stage.backgroundColor = '#787878';

        this.map = this.game.add.tilemap('de_dust2');
        //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
        //  The second parameter maps this name to the Phaser.Cache key 'tiles'
        this.map.addTilesetImage('de_dust2', 'tiles');

        //  Creates a layer from the the map data.
        //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
        this.mapLayer = this.map.createLayer('map');

        let objects: any = this.map.objects;
        let collisions = objects.blocked;

        console.log(this.mapLayer);
        console.log(collisions);
        console.log(this.map.collision);
        

        //this.blockedLayer = this.map.createLayer('blocked');

        //this.layer.scale.set(0.5);

        //set collision
        //this.map.setCollisionBetween(1,1000,true,this.blockedLayer);

        //  Un-comment this on to see the collision tiles
        //this.mapLayer.debug = true;

        //  This resizes the game world to match the layer dimensions
        this.mapLayer.resizeWorld();

        this.player = this.game.add.sprite(864,224,'player');

        //make camera to follow player
        this.game.camera.follow(this.player);

        // create the cursor key object
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        let cursors = this.cursors;
        let playervelocity = 10;

        //this.game.physics.arcade.collide(this.player, this.blockedLayer);

        if (cursors.up.isDown)
        {
            this.player.y -= playervelocity;
        }
        else if (cursors.down.isDown)
        {
            this.player.y += playervelocity;
        }
    
        if (cursors.left.isDown)
        {
            this.player.x -= playervelocity;
        }
        else if (cursors.right.isDown)
        {
            this.player.x += playervelocity;
        }
    
    }
    
    render() {
    
        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    
    }
    
}