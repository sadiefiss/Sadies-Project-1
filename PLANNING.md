# Sadies-Project-1
poem generator
-A game with words where the player chooses or enters a word that is a primary part of speech. those words will be used to fill in the gaps and  generate 1 out of 5 poem frames all of the poem frames will be prompts i wrote, each  would be missing five words.
#pseudocode
display  5 text boxes where the player can enter a noun, adjective, person in the room, verb and noun
generate one of 5 random sentences that display the users words of choice 

//define and require constants
the constants in my game would be the poems 1 through five
using an  array of objects

//define required variables used to track the state of the game
the first word someone enters would be pushed into the array
this would make it easy  with the variable numbers of each needed word for each poem.
i plan to store my poems in objects, these object will have poem structure  from the structure of each poem frame that i write.

//3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
i plan to store the poem-frames  in objects,  from the structure of each poem frame  these will be acessed each time  the player adds their words in the word entry boxes.


//4) Upon loading the app should:
when the player opens the game they will see five word boxes each listed with  add your noun, verb, etc  the poem would be generated at the bottom of these five boxes  the player would type their words in and click to generate a new poem  each time
i would do this using an init function
to assign empty array back to user input  array
and reinitialize the state of the game

//5) Handle a player clicking a square
 i would use an add event listener for the player to add their input words
 and click entering them into the game so that the poem can be generated

//6) Handle a player clicking the replay button
when the player clicks the replay button the word entry boxes will clear and a new poem frame will cycle through each time the player starts over adding new words to the input boxes.



