'use strict'



function Creature(race) {
		this.race = race	
	}

Creature.prototype.raceCheck = function() {
	 console.log(`I'm ${this.race}`)
}

function Allies(land, race, name) {
	Creature.call(this, race);
	this.land = land;
    this.name = name;
}
Allies.prototype = Object.create(Creature.prototype);
Allies.prototype.Introducing = function() {
	console.log(`My name is ${this.name}.I am a resident of ${this.land} lands`)
}

Allies.prototype.AlliesCall = function() {
	console.log(`allied meeting announced`)
}

function Elf(land,race,name,rank,weapon,ultimate) {
	Allies.call(this, land, race, name);
	this.rank = rank;
	this.weapon = weapon;
	this.ultimate = ultimate;
}

Elf.prototype = Object.create(Allies.prototype);
Elf.prototype.ultimateUse = function () {
	console.log(`${this.name} is using ${this.ultimate}!`)
}

Elf.prototype.preparetofight = function () {
	console.log(`${this.name} took out his ${this.weapon} and ready to fight`)
}

Elf.prototype.statusCheck = function () {
	console.log(`My currently rank is ${this.rank}`)	
}



function Human(land,race,name,profession,sex,age, feature) {
	Allies.call(this, land, race, name)
	this.profession = profession;
	this.sex = sex;
	this.age = age;
}

Human.prototype = Object.create(Allies.prototype);
Human.prototype.professionCheck = function() {
	console.log(`My profession is ${this.profession}`)
}

Human.prototype.sexCheck = function() {
	console.log(`I'm ${this.sex}`)
}

Human.prototype.ageCheck = function() {
	console.log(`I'm ${age} years old`)
}

function Ancient(race,element,location,power,artifact, curse) {
	Creature.call(this, race)
	this.element = element;
	this.location = location;
	this.power = power;
	this.artifact = artifact;
}

Ancient.prototype = Object.create(Creature.prototype);

Ancient.prototype.ejection = function() {
	console.log(`At ${this.location} artifact ${this.artifact} was released`)
}

Ancient.prototype.powerCheck = function() {
	console.log(`This Ancient has ${this.power} points`)
}

Ancient.prototype.elementCheck = function() {
	console.log(`At ${this.location} artifact ${this.artifact} was released`)
}

function Mercenary(race, price, skill, combatExperience,tenant,story) {
	Creature.call(this, race)
	this.price = price
	this.skill = skill
	this.combatExperience = combatExperience
}


Mercenary.prototype = Object.create(Creature.prototype);

Mercenary.prototype.priceCheck = function() {
	console.log(`I will serve you for a modest fee of ${this.price} coins`)
}

Mercenary.prototype.SkillCheck = function() {
	console.log(`My main advantage is ${this.skill}`)
}

Mercenary.prototype.CombatExperienceCheck = function() {
	console.log(`I've been on the battlefield for ${this.combatExperience} years`)
}

const Elf1 = new Elf('Middleearth','Black Elf','Omoyo','guardian','bow','Eagle eye');

Elf1.raceCheck();
Elf1.ultimateUse();
Elf1.preparetofight();
Elf1.statusCheck();
Elf1.AlliesCall();