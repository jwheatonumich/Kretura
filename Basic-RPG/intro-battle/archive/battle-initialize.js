

//Set the various fields on the webpage as it loads
window.onload = dataLoad();
window.onload = playerSetup();
window.onload = enemySetup();
window.onload = setStats();
window.onload = backButton(localStorage.getItem("lastPage"));
