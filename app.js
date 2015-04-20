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
	var name = document.getElementById("name").addEventListener('click', Monster);
	var dexterity = document.getElementById("dexterity").addEventListener('click', Monster);
	var constitution = document.getElementById("constitution").addEventListener('click', Monster);
	var wisdom = document.getElementById("wisdom").addEventListener('click', Monster);
	var intelligence = document.getElementById("intelligence").addEventListener('click', Monster);
	var charisma = document.getElementById("charisma").addEventListener('click', Monster);
};

Monster.prototype = {
	attack : function () {
		return this.strength * (Math.floor(Math.random() * 20) + 1);
	}
}

Player.prototype.attack = function () {
		return this.dexterity* (Math.floor(Math.random() * 20) + 1);
}