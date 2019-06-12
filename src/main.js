import Phaser from 'phaser';
import dejto from './skrpy';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload () {
    this.load.image('ship', 'assets/ship.png');
    this.load.image('fire', 'assets/fire1.png');
    dejto();
}

function create () {
    var particles = this.add.particles('fire');

    var emitter = particles.createEmitter({
        speed: 50,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var ship = this.physics.add.image(400, 100, 'ship');

    ship.setVelocity(100, 200);
    ship.setBounce(1, 1);
    ship.setCollideWorldBounds(true);

    emitter.startFollow(ship);
}