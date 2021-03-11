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

//Function to delete all contents of an object
function deleteContents(ID){
    document.getElementById(ID).innerHTML = "";
};

function changeLinkOnClick(linkID,code){
    let elem = document.getElementById(linkID);
    elem.setAttribute("onClick",code);
};

//Function to create X images inside an object
function createImages(parent,image,quantity,altText,className){
    for(i=0;i<quantity;i++){
        let elem = document.createElement("img");
        elem.src = image;
        elem.setAttribute("alt", altText);
        elem.setAttribute("class", className);
        document.getElementById(parent).appendChild(elem);
    };
}

//Function to update training links with appropriate coin function
function updateTrainingLinks(){
    if(eventData.training == "bearclaw"){

        //Delete the acorn coin images
        deleteContents("attack-training");
        deleteContents("defense-training");
        deleteContents("endurance-training");

        //Update training links to use the bearclaw training code
        changeLinkOnClick("attack-training","bearclawTraining('attack')");
        changeLinkOnClick("defense-training","bearclawTraining('defense')");
        changeLinkOnClick("endurance-training","bearclawTraining('endurance')");

        //Add bearclaw images to training links
        createImages("attack-training","../images/bearclaw-coin.png",1,"Gold coin","cost")
        createImages("defense-training","../images/bearclaw-coin.png",1,"Gold coin","cost")
        createImages("endurance-training","../images/bearclaw-coin.png",1,"Gold coin","cost")

    }else if(eventData.training == "mushroom"){

        //Delete the acorn coin images
        deleteContents("attack-training");
        deleteContents("defense-training");
        deleteContents("endurance-training");

        //Update training links to use the bearclaw training code
        changeLinkOnClick("attack-training","mushroomTraining('attack')");
        changeLinkOnClick("defense-training","mushroomTraining('defense')");
        changeLinkOnClick("endurance-training","mushroomTraining('endurance')");

        //Add bearclaw images to training links
        createImages("attack-training","../images/mushroom-coin.png",2,"Silver coin","cost")
        createImages("defense-training","../images/mushroom-coin.png",2,"Silver coin","cost")
        createImages("endurance-training","../images/mushroom-coin.png",2,"Silver coin","cost")

    }
}

let eventData = loadEventData();
updatePageText(eventData.eventName,"title")
updateImage(eventData.eventImage,"page-image")
updatePageText(eventData.eventText,"page-text")
updateTrainingLinks();

document.getElementById('done-training').onclick = function() {    
    setMandatoryPage('roguelike/prebattle/prebattle.html');
};