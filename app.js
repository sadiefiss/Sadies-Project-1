//console.log("js loaded")



//constants-
const playerInputs = {
    emotionArray: [],
    verbArray: [],
    adjective1Array: [],
    nounArray: [],
    adjective2Array: []
};

function generatePoem() {
const emotion = document.getElementById('emotion').value;
    const verb = document.getElementById('verb').value;
    const adjective1 = document.getElementById('adjective1').value;
    const noun = document.getElementById('noun').value;
    const adjective2 = document.getElementById('adjective2').value;

    playerInputs.emotionArray.push(emotion);
    playerInputs.verbArray.push(verb);
    playerInputs.adjective1Array.push(adjective1);
    playerInputs.nounArray.push(noun);
    playerInputs.adjective2Array.push(adjective2);

//playerInputs.emotionArray.push("some  emotion");
//playerInputs.verbArray.push("some verb");
//playerInputs.adjective1Array.push("some adjective1");
//playerInputs.nounArray.push("some noun1");
//playerInputs.adjective2Array.push("some adjective2");


const poem = `I felt ${playerInputs.emotionArray[0]} as I watched myself ${playerInputs.verbArray[0]} 
down the ${playerInputs.adjective1Array[0]} path. A ${playerInputs.nounArray[0]} saw me on my way. It is the time of the season I can let 
myself be ${playerInputs.adjective2Array[0]}.`;

const poemResult = document.getElementById('poem-result');
poemResult.textContent = poem;

//reset input
document.getElementById('emotion').value
document.getElementById('verb').value 
document.getElementById('adjective1').value
document.getElementById('noun').value 
document.getElementById('adjective2').value


playerInputs.emotionArray = [];
    playerInputs.verbArray = [];
    playerInputs.adjective1Array = [];
    playerInputs.nounArray = [];
    playerInputs.adjective2Array =[];
//i want the input boxes to reset after the code comes in 
//and i want the poem to not show untill the user clicks to enter it and
// i would like the button to change color when its hovered over
//will possibly create more word templets to randomize within my code 
//then i will fix up my css with pink cloud bac


}







//event listeners 
const generateButton = document.getElementById('buttonGen'); 
generateButton.addEventListener('click', generatePoem); 




  