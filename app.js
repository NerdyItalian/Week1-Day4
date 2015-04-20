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
	var name = document.getElementById("name").value;
	var strength = document.getElementById("strength").value;
	var dexterity = document.getElementById("dexterity").value;
	var	constitution = document.getElementById("constitution").value;
	var wisdom = document.getElementById("wisdom").value;
	var intelligence = document.getElementById("intelligence").value;
	var charisma = document.getElementById("charisma").value;
	var playerClass = document.getElementById("player").value;
	if (playerClass != ""){
		var bear = new Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass);
		playerInfo.push(bear);
	} else {
		var bear = new Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma);
		playerInfo.push(bear);
	}
	updateDisplay();
}

function updateDisplay(){
	var table = document.getElementById("table");
	var row = table.insertRow(-1);
	var monster = playerInfo[playerInfo.length - 1];
	var statsArray = [monster.name, monster.strength, monster.dexterity, monster.constitution, monster.wisdom, monster.intelligence, monster.charisma];
	for (var i = 0; i < statsArray.length; i++){
		var	cell = row.insertCell(i);
		cell.innerHTML = statsArray[i];
	}
	if(monster instanceof Player){
		var cell = row.insertCell(-1);
		cell.innerHTML = monster.playerClass;
	}
}



Monster.prototype.attack = function () {
		return this.strength * (Math.floor(Math.random() * 20) + 1);
} 

Player.prototype.attack = function () {
		return this.dexterity * (Math.floor(Math.random() * 20) + 1);
}


/* i am stuck -- i can't figure out how to get my addMonster() function to add infromation to the table on my DOM
*/