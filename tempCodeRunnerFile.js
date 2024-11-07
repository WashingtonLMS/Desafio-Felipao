class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    skills = {
      Ninja: 'Rasengan',
      Warrior: 'Execute',
      Mage: 'Firebolt'
    }
  
    presentation() {
      return `Hello! my name is ${this.name} I'm from the class ${this.type} my favorite skill is ${this.skills[this.type]}`
    }
  
    calculateDamage() {
      switch (this.type) {
        case 'Mage':
          return 15 * 30;
        case 'Warrior':
          return 30 * 15;
        case 'Ninja':
          return 45 * 10;
        default:
          return 0;
      }
    }
  
    damage() {
      const damage = this.calculateDamage();
      return `${this.name} is class ${this.type} Casting ${this.skills[this.type]}: ${damage} Points Damage`;
    }
  }
  
  let ninja = new Hero('Naruto', 21 , 'Ninja')
  let warrior = new Hero('Escanor', 42 , 'Warrior')
  let mage = new Hero('Merlin', 30 , 'Mage');
  console.log(mage.presentation())
  console.log('--------------')
  console.log(ninja.presentation())
  console.log('--------------')
  console.log(warrior.presentation())
  console.log('--------------')
  console.log('--------------')
  console.log(mage.damage())
  console.log('--------------')
  console.log(warrior.damage())
  console.log('--------------')
  console.log(ninja.damage())




