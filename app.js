
// Const - random word array 
//the source in my code for generating the random words in the poem templates 
const emotionWords = ["sleepy", "curious", "nostalgia", "passion", "trust", "guilt", "wonder"];
const verbWords = ["provide", "laugh", "forget", "slink", "dance","skedaddle"];
const adjective1Words = ["secretive", "vibrant", "domesticated", "whimsical", "hujungus","wild"];
const nounWords = ["Mcdonalds", "SnoopDog", "John Stamos", "Panties", "Obama","tuba"];
const adjective2Words = ["bumpy", "fantastic", "glossy", "strong", "fluttery", "ugly"];

// Object for user inputs --contains the player enetred words
const playerInputs = {
    emotionArray: [],
    verbArray: [],
    adjective1Array: [],
    nounArray: [],
    adjective2Array: []
};

// Function  that selects a random word from word array above
function getRandomWord(wordArray) {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomIndex];
}

// Function to display poem retreives input from users with either a value from the user

function generatePoem() {
    let emotion = document.getElementById('emotion').value;
    let verb = document.getElementById('verb').value;
    let adjective1 = document.getElementById('adjective1').value;
    let noun = document.getElementById('noun').value;
    let adjective2 = document.getElementById('adjective2').value;

    //or value from the radom word arrray if user input is empy
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

    // Array of poem templates the basis for generating actual poems
    const poems = [
        `I felt ${playerInputs.emotionArray[0]} as I watched myself ${playerInputs.verbArray[0]} down the ${playerInputs.adjective1Array[0]} path. A ${playerInputs.nounArray[0]} saw me on my way. It is the time of the season I can let myself be ${playerInputs.adjective2Array[0]}.`,
        
   ` In the midst of my ${emotion}, I ${verb} down the ${adjective1} beach. A ${noun} shared secrets, making me feel ${adjective2}.`,

   `Looking up at  the ${emotion} moon, I began to ${verb} with ${adjective1} enthusiasm. My trusty ${noun} joined me on this ${adjective2} journey.` ,
       
    `With ${emotion} in my heart, I ${verb} through the ${adjective1} mountain. At the summit, I found a hidden ${noun} and experienced pure ${adjective2}.`,
   
   `A strong feeling of ${emotion} fills the air. I can only ${verb}  how we used to look for ${adjective1} rocks. I asked  you how the ${noun} had the ability to make you seem so ${adjective2} for your age.`,

   `The ${emotion} I feel when I see a ${noun}. It makes my ${adjective1} soul want to ${verb}  the ${adjective2} sea.`,

   `People say im ${adjective1} when I tell them im related to ${noun}, But I can ${verb} better than my ${noun} and that makes my ${adjective2} heart ${emotion}`,
    ];

    // Gen  random poem template fills the templates with the player input gnerates
    //and displays generated poem in the poem result 
    const poemNumber = Math.floor(Math.random() * poems.length);
    const poemResult = document.getElementById('poem-result');
    poemResult.textContent = poems[poemNumber];

    // Resets the input fields
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

// Event listener to generate poem 
const generateButton = document.getElementById('buttonGen');
generateButton.addEventListener('click', generatePoem); 


//function to reset  the  template

function resetTemplate() {
    location.reload();
}

// Event listener to Reset the template  when player hits the reset button
const resetTemplateButton = document.getElementById('resetTemplateButton');
resetTemplateButton.addEventListener('click', resetTemplate);
