'use strict'



class Creature {
	constructor(race) {
		this.race = race	
	}
	RaceCheck = () => console.log(`I'm ${this.race}`)
}

class Allies extends Creature {
    constructor(land, race, name) {
        super(race)
        this.land = land
        this.name = name
        }
    Introducing = () => console.log(`My name is ${this.name}.I am a resident of ${this.land} lands`)
    AlliesCall = () => console.log(`allied meeting announced`);
}

class Elf extends Allies {
	#feature
	constructor(land,race,name,rank,weapon,ultimate,feature) {
		super(land,race,name)
		this.rank = rank;
		this.weapon = weapon;
		this.ultimate = ultimate;
		this.#feature = feature
	}
	ultimateUse = () => console.log(`${this.name} is using ${this.ultimate}!`);
	preparetofight = () => console.log(`${this.name} took out his ${this.weapon} and ready to fight`)
	statusCheck = () => console.log(`My currently rank is ${this.rank}`)	
}

const Elf1 = new Elf('Middleearth','Black Elf','Omoyo','guardian','bow','Eagle eye','night vision');
Elf1.RaceCheck();
Elf1.ultimateUse();
Elf1.preparetofight();
Elf1.statusCheck();
Elf1.AlliesCall();


class Human extends Allies {
	#feature
	constructor(land,race,name,profession,sex,age, feature) {
		super(land,race,name)
		this.profession = profession
		this.sex = sex
		this.age = age
		this.#feature = feature
	}
	professionCheck = () => console.log(`My profession is ${this.profession}`)
	sexCheck = () => console.log(`I'm ${this.sex}`)
	ageCheck = () => console.log(`I'm ${age} years old`);
}

class Ancient extends Creature {
	#curse
	constructor(race,element,location,power,artifact, curse) {
		super(race)
		this.element = element
		this.location = location
		this.power = power
		this.artifact = artifact
		this.#curse = curse
	}
	ejection = () => console.log(`At ${this.location} artifact ${this.artifact} was released`)
	powerCheck = () => console.log(`This Ancient has ${this.power} points`)
	elementChecl = () => console.log(`This Ancient belongs to the ${this.element} element`)
}

class Mercenary extends Creature {
	#story
	constructor(race, price, skill, combatExperience,tenant,story) {
		super(race)
		this.price = price
		this.skill = skill
		this.combatExperience = combatExperience
		this.#story = story 
	}
	priceCheck = () => console.log(`I will serve you for a modest fee of ${this.price} coins`)
	SkillCheck = () => console.log(`My main advantage is ${this.skill}`)
	CombatExperienceCheck = () => (`I've been on the battlefield for ${this.combatExperience} years`)
}

