//Store data for the current level
let currentLevel = enemySequence[playerStats["roguelike-level"]].level;
let enemyList = enemySequence[playerStats["roguelike-level"]].enemyList;
let enemyCount = enemySequence[playerStats["roguelike-level"]].enemyCount;

document.getElementById('fight-button').onclick = function() {
    startExplore(enemyList,2);
    setMandatoryPage('../explore-game/explore.html')

}