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

//Function to select three enemies that player can choose from
function selectEnemies(){

    let chosenEnemies = [];

    for (let i = 0; i < 3; i++){

        let randomEnemy = enemyList[Math.floor(Math.random()*enemyList.length)] //Select a random enemy from the list of possible enemies

        chosenEnemies.push(randomEnemy);

    };

    return chosenEnemies;

};

function findEnemyById(inputId){

    let outputId;

    for (i in enemyStats){
        if (enemyStats[i].enemyID === inputId){
            outputId = i;
        };
    };

    return outputId;
}

//Function to update enemy choice images
function updateEnemyChoiceImages(){

    //Store enemy image elements
    enemy1Image = document.getElementById("enemy1-image");
    enemy2Image = document.getElementById("enemy2-image");
    enemy3Image = document.getElementById("enemy3-image");

    //Store the file locations of enemy images
    enemy1Src = enemyStats[findEnemyById(chosenEnemiesList[0])]["enemyImage"];
    enemy2Src = enemyStats[findEnemyById(chosenEnemiesList[1])]["enemyImage"];
    enemy3Src = enemyStats[findEnemyById(chosenEnemiesList[2])]["enemyImage"];

    //Update image sources on page
    enemy1Image.src = enemy1Src;
    enemy2Image.src = enemy2Src;
    enemy3Image.src = enemy3Src;

}

function updateEnemyChoiceLinks(){

    //Store enemy IDs in arrays
    enemy1OnClick = [enemyStats[findEnemyById(chosenEnemiesList[0])]["enemyID"]]
    enemy2OnClick = [enemyStats[findEnemyById(chosenEnemiesList[1])]["enemyID"]]
    enemy3OnClick = [enemyStats[findEnemyById(chosenEnemiesList[2])]["enemyID"]]

    //Set on click of each enemy image to start battle with that enemy
    document.getElementById('enemy1-link').onclick = function() {setMandatoryPage('roguelike/postbattle/postbattle.html');startBattle(enemy1OnClick,false,true,true);};
    document.getElementById('enemy2-link').onclick = function() {setMandatoryPage('roguelike/postbattle/postbattle.html');startBattle(enemy2OnClick,false,true,true);};
    document.getElementById('enemy3-link').onclick = function() {setMandatoryPage('roguelike/postbattle/postbattle.html');startBattle(enemy3OnClick,false,true,true);};
    
}

window.onload = setNextLevel();
pageText = determinePageText(); //Store the value that will go in the primary text on page

//Update page content based on level
window.onload = updatePageText(pageText,"game-text");
window.onload = updatePageText(levelName,"level-name");
window.onload = updateImage(pageImage,"page-image");

//Populate the enemies for player to choose from
let chosenEnemiesList = selectEnemies();
window.onload = updateEnemyChoiceImages();
window.onload = updateEnemyChoiceLinks();