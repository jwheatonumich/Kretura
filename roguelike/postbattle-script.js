//Store data for the current level
let currentLevel = playerStats["roguelike-level"];
let enemyList = enemySequence[playerStats["roguelike-level"]].enemyList;
let enemyCount = enemySequence[playerStats["roguelike-level"]].enemyCount;

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

pageText = determinePageText(); //Store the value that will go in the primary text on page
window.onload = updatePageText(pageText,"game-text"); //On page load, update primary text on page