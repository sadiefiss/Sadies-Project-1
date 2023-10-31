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


const poem = `I felt ${playerInputs.emotionArray[0]} as I watched myself ${playerInputs.verbArray[1]} 
down the ${playerInputs.adjective1Array[2]} path. A ${playerInputs.nounArray[3]} saw me on my way. It is the time of the season I can let 
myself be ${playerInputs.adjective2Array[4]}.`;

const poemResult = document.getElementById('poem-result');
poemResult.textContent = poem;

}







//event listeners 
const generateButton = document.getElementById('buttonGen'); 
generateButton.addEventListener('click', generatePoem); 




  