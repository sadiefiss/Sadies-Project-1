# Sadie's Project 1
Poem Generator
- A word game where the player selects or enters words representing primary parts of speech. These words will be used to fill in the gaps and generate one of 5 poem frames. Each poem frame will consist of prompts I have written, with each missing five words.

## Pseudocode
Display 5 text boxes where the player can enter a noun, adjective, person in the room, verb, and noun. Generate one of 5 random sentences that display the user's words of choice.

// Define and Require Constants
The constants in my game will represent the 5 poem frames, each stored as an array of objects.

// Define Required Variables to Track the Game State
The first word entered by the player will be added to an array, making it easier to manage the varying numbers of each needed word for each poem. I plan to store my poems in objects, with each object representing the structure of a poem frame that I write.

// 3) Store Elements on the Page That Will Be Accessed in Code More Than Once in Variables
I plan to store the poem frames in objects, representing the structure of each poem frame. These will be accessed each time the player adds their words to the input boxes.

// 4) Upon Loading, the App Should:
When the player opens the game, they will see five input boxes, each labeled with "Add your noun," "verb," etc. The poem will be generated at the bottom of these five boxes. The player will type their words and click to generate a new poem each time. I will achieve this using an init function to reset the user input array and reinitialize the game's state.

// 5) Handle a Player Clicking a Square
I will add an event listener to allow the player to enter their input words and generate the poem when they click.

// 6) Handle a Player Clicking the Replay Button
When the player clicks the replay button, the word entry boxes will clear, and a new poem frame will cycle through each time the player starts over, adding new words to the input boxes.



