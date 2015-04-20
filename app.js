// Constructor for Monster
function Monster(name, strength, dexterity, constitution, wisdom, intelligence,charisma){
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
}

// Constructor for Player thats inherits from Monster using the .call which brings in the Monster object
function Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass) {
    Monster.call(this, name, strength, dexterity, constitution, wisdom, intelligence, charisma);
    this.playerClass = playerClass;
}

//Can't remember why i added this but i think it had to do with when i google searched inheritance.
Player.prototype = Object.create(Monster.prototype);
Player.prototype.constructor = Player;

// my array for information to be pushed to.
var playerInfo = [];

// this function is collecting the information and putting it into a player or monster object by hitting the button
function addMonster(){
	var name = document.getElementById("name").value;
	var strength = document.getElementById("strength").value;
	var dexterity = document.getElementById("dexterity").value;
	var	constitution = document.getElementById("constitution").value;
	var wisdom = document.getElementById("wisdom").value;
	var intelligence = document.getElementById("intelligence").value;
	var charisma = document.getElementById("charisma").value;
	var playerClass = document.getElementById("player").value;
	// this if/else statement is checking whether the playerClass field is populated, and if so to push it to the end of the array.
	if (playerClass != ""){
		var bear = new Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass);
		playerInfo.push(bear);
	} else {
		var bear = new Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma);
		playerInfo.push(bear);
	}
	updateDisplay();
}

// this function adds the rows & cells to the table.
function updateDisplay(){
	var table = document.getElementById("table");
	// the (-1) allows for the row to start at the last available index.
	var row = table.insertRow(-1);
	// the (-1) this is taking in the last available index in the array that we just created. always the last available index value and a postitive number
	var monster = playerInfo[playerInfo.length - 1];
	var statsArray = [monster.strength, monster.dexterity, monster.constitution, monster.wisdom, monster.intelligence, monster.charisma];
	var nameCell = row.insertCell(0);
	// this is HTML code by having the .innerHTML the script knows that we are passing in the string of the HTML while concatinating with the information submitted
	// example <button onclick="playerInfo[9].attack()"> monster.name </button>
	nameCell.innerHTML = "<button onclick=\"playerInfo[" + (playerInfo.length-1) + "].attack()\">" + monster.name + "</button>";
	// this is looping throught the statsArray to compile the information submitted and insert into the DOM.
	for (var i = 0; i < statsArray.length; i++){
		var	cell = row.insertCell(-1);
		cell.innerHTML = statsArray[i];
	}
	// this is trying to figure out if information was submitted in the "Player Class (optional)" box.
	if(monster instanceof Player){
		var cell = row.insertCell(-1);
		cell.innerHTML = monster.playerClass;
	}
}

Monster.prototype.attack = function () {
		alert(this.name + " attacks for " + (parseInt(this.strength) + (Math.floor(Math.random() * 20) + 1)));
} 

Player.prototype.attack = function () {
		alert(this.name + " attacks for " + (parseInt(this.dexterity) + (Math.floor(Math.random() * 20) + 1)));
}

