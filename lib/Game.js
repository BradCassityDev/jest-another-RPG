const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');
const player = require('./Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = 0;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('Darth Vador', 'Lightsabor'));
    this.enemies.push(new Enemy('Jason', 'Machete'));
    this.enemies.push(new Enemy('Amy Schumer', 'Bad comedy'));

    this.currentEnemy = this.enemies[0];

    inquirer.prompt({
        type: 'text',
        name: 'name',
        message: 'What is your players name?'
    })
    .then(({name}) => {
        this.player = new Player(name);

        // test the object
        this.startNewBattle();
    });
};

module.exports = Game;