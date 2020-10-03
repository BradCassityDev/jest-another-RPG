// Character Class
class Character {
    // Character Constructor
    constructor(name = '') {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
    }

    // Check if Character is alive
    isAlive() {
        if (this.health === 0) {
          return false;
        }
        return true;
    }

    // Get character attack value
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;
      
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Get Character health
    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    }

    // Reduce character health
    reduceHealth(health) {
        this.health -= health;
      
        if (this.health < 0) {
          this.health = 0;
        }
    }
}

module.exports = Character;