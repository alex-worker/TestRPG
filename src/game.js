import Phaser from 'phaser'

import Preload from './scenes/Preload';
import RL from './scenes/RL';

// font size
const FONT = 32
 
// map dimensions
const ROWS = 15
const COLS = 15

const width = COLS * FONT
const height = ROWS * FONT

const scene = [
    Preload,
    RL
]

const config = {
    type: Phaser.AUTO,
    pixelArt: true,
    clearBeforeRender: false,
    width,
    height,
    scene
}

new Phaser.Game(config)