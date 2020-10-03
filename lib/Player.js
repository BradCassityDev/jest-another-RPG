// Player Class
const Potion = require("./Potion");
const Character = require('./Character');

class Player extends Character {
    // Constructor
    constructor(name = '') {
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

    // Get Player Stats
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    // Get Player Inventory
    getInventory() {
        if(this.inventory.length) {
            return this.inventory;
        }
        return false;
    }
    // Add Potion
    addPotion(potion) {
        this.inventory.push(potion);
    }

    // Use Potion
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}

module.exports = Player;