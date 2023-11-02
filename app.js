
// Const - random word array
const emotionWords = ["sleepy", "curious", "nostalgia", "passion", "wonder"];
const verbWords = ["provide", "laugh", "forget", "slink", "dance"];
const adjective1Words = ["secretive", "vibrant", "domesticated", "whimsical", "hujungus"];
const nounWords = ["Mcdonalds", "SnoopDog", "John Stamos", "Panties", "Obama"];
const adjective2Words = ["bumpy", "fantastic", "glossy", "strong", "fluttery"];

// Object for user inputs
const playerInputs = {
    emotionArray: [],
    verbArray: [],
    adjective1Array: [],
    nounArray: [],
    adjective2Array: []
};

// Function  
function getRandomWord(wordArray) {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomIndex];
}

// Function to display poem
function generatePoem() {
    let emotion = document.getElementById('emotion').value;
    let verb = document.getElementById('verb').value;
    let adjective1 = document.getElementById('adjective1').value;
    let noun = document.getElementById('noun').value;
    let adjective2 = document.getElementById('adjective2').value;

    
    if (!emotion || !verb || !adjective1 || !noun || !adjective2) {
        emotion = getRandomWord(emotionWords);
        verb = getRandomWord(verbWords);
        adjective1 = getRandomWord(adjective1Words);
        noun = getRandomWord(nounWords);
        adjective2 = getRandomWord(adjective2Words);
    }

    // Store user inputs in the playerInputs object
    playerInputs.emotionArray.push(emotion);
    playerInputs.verbArray.push(verb);
    playerInputs.adjective1Array.push(adjective1);
    playerInputs.nounArray.push(noun);
    playerInputs.adjective2Array.push(adjective2);

    // Array of poem templates
    const poems = [
        `I felt ${playerInputs.emotionArray[0]} as I watched myself ${playerInputs.verbArray[0]} down the ${playerInputs.adjective1Array[0]} path. A ${playerInputs.nounArray[0]} saw me on my way. It is the time of the season I can let myself be ${playerInputs.adjective2Array[0]}.`,
        
   ` In the midst of my ${emotion}, I ${verb} down the ${adjective1} beach. A ${noun} shared secrets, making me feel ${adjective2}.`,

   `Looking up at  the ${emotion} moon, I began to ${verb} with ${adjective1} enthusiasm. My trusty ${noun} joined me on this ${adjective2} journey.` ,
       
    `With ${emotion} in my heart, I ${verb} through the ${adjective1} mountain. At the summit, I found a hidden ${noun} and experienced pure ${adjective2}.`,
   // Add more poem templates here
    ];

    // Gen  random poem
    const poemNumber = Math.floor(Math.random() * poems.length);
    const poemResult = document.getElementById('poem-result');
    poemResult.textContent = poems[poemNumber];

    // Reset input fields
    document.getElementById('emotion').value = '';
    document.getElementById('verb').value = '';
    document.getElementById('adjective1').value = '';
    document.getElementById('noun').value = '';
    document.getElementById('adjective2').value = '';

    // Clear user inputs
    playerInputs.emotionArray = [];
    playerInputs.verbArray = [];
    playerInputs.adjective1Array = [];
    playerInputs.nounArray = [];
    playerInputs.adjective2Array = [];
}

// Event listener 
const generateButton = document.getElementById('buttonGen');
generateButton.addEventListener('click', generatePoem); 
