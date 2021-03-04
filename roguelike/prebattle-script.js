//Store data for the current level
let currentLevel = playerStats["roguelike-level"];
let enemyList = enemySequence[playerStats["roguelike-level"]].enemyList;
let enemyCount = enemySequence[playerStats["roguelike-level"]].enemyCount;

function setNextLevel(){
    if(playerStats["roguelike-nextlevel"] === playerStats["roguelike-level"]){
        playerStats["roguelike-nextlevel"]++;

        localStorage.setItem('storedPlayerStats', JSON.stringify(playerStats));
    }
}

//When fight button is clicked, start the fight
document.getElementById('fight-button').onclick = function() {
    startExplore(enemyList,enemyCount);
    
    setMandatoryPage('roguelike/explore.html');

};

//Determine what shows-up in the text on page
function determinePageText(){
    let pageText = `Level: ${currentLevel}`;
    return pageText;
};

//Function to update the text of an element on the page
function updatePageText(text,ID){
    gameTextPara = document.getElementById(ID);
    gameTextPara.innerHTML = text;
};

window.onload = setNextLevel();
pageText = determinePageText(); //Store the value that will go in the primary text on page
window.onload = updatePageText(pageText,"game-text"); //On page load, update primary text on page