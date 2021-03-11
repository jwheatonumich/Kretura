//Load player data into a variable from local storage
var retrievedObject = localStorage.getItem('storedPlayerStats');
var playerStats = JSON.parse(retrievedObject)
var battleStatusData = ""
let mode = "skirmish"

function gameMode(){
    var rad = document.userSettings.mode;
    var prev = null;
    for (var i = 0; i < rad.length; i++) {
        rad[i].addEventListener('change', function() {
            if (this !== prev) {
                prev = this;
            }
            mode = this.value;
        });
    }
}

//Function to set player stats variable to new game stats
function skirmishDataLoad(){
    playerStats = {"name":"Fred", "species":"gremlin", "image":"../images/little-goblin.png",
    "health":20, "maxhealth":20, "attack":5, "defense":5, "endurance":5, 
    "day":1, "caveday":0,"treeday":0,
    "acorncoin":0, "mushroomcoin":0, "bearclawcoin":0, "leafcoin":3,
    "ship-acorncoin":0,"ship-mushroomcoin":0,"ship-bearclawcoin":0,
    "squirrelunlock":false,"mushroomunlock":false,"bearunlock":false,
    "roguelike-level":1, "roguelike-nextlevel":2, "statpoints":15}
    playerStats["name"] = document.getElementById("name").value
    playerStats["mode"] = mode;

    battleStatusData = {
        "inProgress":false
    };

    battleSettings ={
        "escape":true,
        "singleBattle":false,
        "mandatory":false
    };

    dailyEvents ={
        sleep:true,
        acornCatch:true
    };

};

//Function to set player stats variable to new game stats
function adventureDataLoad(){
    playerStats = {"name":"Fred", "species":"gremlin", "image":"../images/little-goblin.png",
    "health":40, "maxhealth":40, "attack":10, "defense":10, "endurance":10, 
    "day":1, "caveday":0,"treeday":0,
    "acorncoin":0, "mushroomcoin":0, "bearclawcoin":0, "leafcoin":3,
    "ship-acorncoin":0,"ship-mushroomcoin":0,"ship-bearclawcoin":0,
    "squirrelunlock":false,"mushroomunlock":false,"bearunlock":false}
    playerStats["name"] = document.getElementById("name").value
    playerStats["mode"] = mode;

    battleStatusData = {
        "inProgress":false
    };

    battleSettings ={
        "escape":true,
        "singleBattle":false,
        "mandatory":false
    };

    dailyEvents ={
        sleep:true,
        acornCatch:true
    };

};

//Function to store player stats variable to local storage
function dataStore(){
    localStorage.setItem('storedPlayerStats', JSON.stringify(playerStats));

    localStorage.setItem('battleStatusData',  JSON.stringify(battleStatusData));

    localStorage.setItem('battleSettings',  JSON.stringify(battleSettings));

    localStorage.setItem('dailyEvents',  JSON.stringify(dailyEvents));

    localStorage.removeItem('lastPage')

    //Store the script for the console
    controlStore("Crash1");
};

//Function that sets text on the website equal to various stat variables
function setStats() {
    
    document.getElementById("acorn-coin").innerHTML = playerStats["acorncoin"];
    document.getElementById("mushroom-coin").innerHTML = playerStats["mushroomcoin"];
    document.getElementById("bearclaw-coin").innerHTML = playerStats["bearclawcoin"];
    document.getElementById("leaf-coin").innerHTML = playerStats["leafcoin"];
}

//Function that gets called when the new game button is clicked
function newGame(){
    if (mode === "skirmish"){
        skirmishDataLoad();
        dataStore();
        setStats();
        setMandatoryPage('roguelike/character-select/character-select.html');
        window.location.href = targetPage;
    } else if (mode === "adventure"){
        adventureDataLoad();
        dataStore();
        setStats();
        clearMandatoryPage();
        window.location.href = "../../narrative/narrative.html";
    } 

};

//Load current player stats when the page loads
window.onload = setStats();

//Add event listeners to update game modes on radio click
window.onload = gameMode()