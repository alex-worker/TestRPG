import Phaser from 'phaser'
import globals from '../globals'

let controls;

function initMap() {
//     // create a new random map
    let map = [];
    for (var y = 0; y < globals.ROWS; y++) {
            var newRow = [];
            for (var x = 0; x < globals.COLS; x++) {
                 if (Math.random() > 0.8)
                    newRow.push(11);
                else
                    newRow.push(0);
            }
            map.push(newRow);
    }

    return map
}

export default class RL extends Phaser.Scene {
    
    constructor() 
    {
      super({ key: 'RL' });
    //   initMap()
    }

    preload(){
        this.load.image('tiles', 'static/super-mario-tiles.png')
    }

    create(){

        // let level = [
        //     [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        //     [  0,   1,   2,   3,   0,   0,   0,   1,   2,   3,   0 ],
        //     [  0,   5,   6,   7,   0,   0,   0,   5,   6,   7,   0 ],
        //     [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        //     [  0,   0,   0,  14,  13,  14,   0,   0,   0,   0,   0 ],
        //     [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        //     [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
        //     [  0,   0,  14,  14,  14,  14,  14,   0,   0,   0,  15 ],
        //     [  0,   0,   0,   0,   0,   0,   0,   0,   0,  15,  15 ],
        //     [ 35,  36,  37,   0,   0,   0,   0,   0,  15,  15,  15 ],
        //     [ 39,  39,  39,  39,  39,  39,  39,  39,  39,  39,  39 ]
        //   ];

        // level[0]=[0,1,2,3,4,5,6,7,8,9,10,11]

        const map = this.make.tilemap({ data: initMap() , tileWidth: 16, tileHeight: 16 });
        const tiles = map.addTilesetImage('tiles');
        // const layer = 
        map.createStaticLayer(0, tiles, 0, 0);

        const camera = this.cameras.main;

          // Set up the arrows to control the camera
        const cursors = this.input.keyboard.createCursorKeys();
        controls = new Phaser.Cameras.Controls.FixedKeyControl({
          camera: camera,
          left: cursors.left,
          right: cursors.right,
          up: cursors.up,
          down: cursors.down,
          speed: 1
        });
        /* eslint-disable no-console */
        // console.log( initMap() )
        // const map = this.make.tilemap({ key: 'map' })
    }

    update(time, delta){
        controls.update(delta);
    }

}