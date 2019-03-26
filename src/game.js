import Phaser from 'phaser'

import globals from './globals'

// import Preload from './scenes/Preload';
import RL from './scenes/RL';
// import Tiled from './scenes/Tiled';

const scene = [
    // Preload,
    RL
    // Tiled
]

/* eslint-disable no-console */
console.log( globals )

const config = {
    type: Phaser.AUTO,
    pixelArt: true,
    clearBeforeRender: false,
    zoom: globals.ZOOM,
    width: globals.width,
    height: globals.height,
    scene
}

new Phaser.Game(config)