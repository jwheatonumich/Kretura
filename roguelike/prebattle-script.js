//Store data for the current level
let currentLevel = playerStats["roguelike-level"];
let levelData = enemySequence[playerStats["roguelike-level"]-1];
let levelName = levelData.levelName;
let pageImage = levelData.levelImage;
let enemyList = levelData.enemyList;
let enemyCount = levelData.enemyCount;

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

//Function to update the image of an element on the page
function updateImage(image,ID){
    gameTextPara = document.getElementById(ID);
    gameTextPara.src = image;
};

window.onload = setNextLevel();
pageText = determinePageText(); //Store the value that will go in the primary text on page

//Update page content based on level
window.onload = updatePageText(pageText,"game-text");
window.onload = updatePageText(levelName,"level-name");
window.onload = updateImage(pageImage,"page-image");