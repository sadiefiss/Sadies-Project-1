//console.log("js loaded")



//constants-
const playerInputs = { emotion: [],
        verb: [],
        adjective1: [],
        noungit: [] ,
        adjective2:[]

}; 

function generatePoem() {
    const emotion = document.getElementById('emotion').value
    const verb = document.getElementById('verb').value 
    const adjective1 = document.getElementById('adjective1').value 
    const noun1 = document.getElementById('noun1').value
    const adjective2 = document.getElementById(adjective2).value
}


const poem = `I felt ${emotion} as I watched myself ${verb} 
down the ${adjective1} path. A ${noun} saw me on my way. It is the time of the season I can let 
myself be ${adjective2}.`;

const poemResult = document.getElementById('poem-result');
poemResult.textContent = poem;











//event listeners 
const genertateButton = document.getElementById('buttonGen'); 
genertateButton.addEventListener('click', generatePoem); 




  