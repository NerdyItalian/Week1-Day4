function Monster(name, strength, dexterity, constitution, wisdom, intelligence,charisma){
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
}

function Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass) {
    Monster.call(this, name, strength, dexterity, constitution, wisdom, intelligence, charisma);
    this.playerClass = playerClass;
}

Player.prototype = Object.create(Monster.prototype);
Player.prototype.constructor = Player;

var playerInfo = [];

function addMonster(){
	var name = document.getElementById("name").innerHTML('click', Player);
	var dexterity = document.getElementById("dexterity").innerHTML('click', Player);
	var constitution = document.getElementById("constitution").innerHTML('click', Player);
	var wisdom = document.getElementById("wisdom").innerHTML('click', Player);
	var intelligence = document.getElementById("intelligence").innerHTML('click', Player);
	var charisma = document.getElementById("charisma").innerHTML('click', Player);
}

Monster.prototype = {
	attack : function () {
		return this.strength * (Math.floor(Math.random() * 20) + 1);
	}
}

Player.prototype.attack = function () {
		return this.dexterity* (Math.floor(Math.random() * 20) + 1);
}


/* i am stuck -- i can't figure out how to get my addMonster() function to add infromation to the table on my DOM
*/