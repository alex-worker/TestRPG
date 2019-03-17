import Phaser from 'phaser'

export default class Preload extends Phaser.Scene {
    
    constructor() 
    {
      super({
        key: 'Preload'
      });
    }

    create() 
    {
      this.scene.start('RL');
    }

    

}