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

//Save the data associated with the current event
function loadEventData(){

    let event;

    for (i in eventSequence){
        if (eventSequence[i].level === playerStats["roguelike-level"] -1){
            event = eventSequence[i];
        }
    }

    return event;
}



let eventData = loadEventData();
updatePageText(eventData.eventName,"title")
updateImage(eventData.eventImage,"page-image")
updatePageText(eventData.eventText,"page-text")

document.getElementById('done-training').onclick = function() {    
    setMandatoryPage('roguelike/prebattle.html');
};