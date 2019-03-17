import Phaser from 'phaser'
/* eslint-disable no-console */

let controls

export default class Tiled extends Phaser.Scene {

    constructor() 
    {
      super({
        key: 'Tiled'
      });
    }

    preload(){
        this.load.image('tiles', 'https://www.mikewesthad.com/phaser-3-tilemap-blog-posts/post-1/assets/tilesets/tuxmon-sample-32px-extruded.png')
        this.load.tilemapTiledJSON('map', 'https://www.mikewesthad.com/phaser-3-tilemap-blog-posts/post-1/assets/tilemaps/tuxemon-town.json')
    }

    create() 
    {
        const map = this.make.tilemap({ key: 'map' })
        // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
        // Phaser's cache (i.e. the name you used in preload)
        const tileset = map.addTilesetImage('tuxmon-sample-32px-extruded', 'tiles')

        const belowLayer = map.createStaticLayer('Below Player', tileset, 0, 0)
        const worldLayer = map.createStaticLayer('World', tileset, 0, 0)
        const aboveLayer = map.createStaticLayer('Above Player', tileset, 0, 0)

        aboveLayer.setDepth(10);
        
        const camera = this.cameras.main

        const cursors = this.input.keyboard.createCursorKeys();
        controls = new Phaser.Cameras.Controls.FixedKeyControl({
          camera: camera,
          left: cursors.left,
          right: cursors.right,
          up: cursors.up,
          down: cursors.down,
          speed: 0.5
        })
    }

    update(time, delta){
        controls.update(delta)
    }

}