# Summer Chores

Someone has a list of summer chores they have to do every Saturday. There are a lot of chores for them to do and naturally get more tired throughout completing their tasks.
If they get too tired, they may have to take a break and go to sleep before completing their chores.

## They have a strict routine, which follows in order:

- Mowing the yard
- Weedeating the edges of the house and fence line
- Trimming the hedges
- Collect fallen wood for summer night fires
- Water the garden

If they manage not to get tired and fall asleep while doing their chores, they have successfully completed their chores.
Also, there's never a chance of the person falling asleep before mowing the yard.

## Time to complete tasks

- Time to mow the yard - 2000ms
- Time to weed eat the yard - 1500ms
- Time to trim the hedges - 1000ms
- Time to collect wood - 2500ms
- Time to water the garden - 500ms

## Required functions

- mowYard:  A function that will take in a person's name and a callback function. When the chore is complete, log "PERSON'S NAME mowed the yard." to the console.
- weedEat:  A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished using the weed eater." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after mowing the yard." to the console.
- trimHedges:   A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished trimming the hedges." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after weed eating the yard." to the console.
- collectWood:  A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished collecting wood." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after trimming the hedges." to the console.
- waterGarden:  A function that will take in a person's name and a callback function. If the chore is completed, log "PERSON'S NAME finished watering the garden." to the console and call the next callback function. Otherwise, log "PERSON'S NAME fell asleep after collecting wood." to the console.
- doSummerChores:   A function that will take in a person's name as an argument. This method will call the mowYard function, essentially wrapping your "callback hell." If all the chores are completed successfully, the function should log "PERSON'S NAME finished all their chores!"

## Tips

- Break the assignment down to its smallest pieces.
- Think about how random number generation works
- Before moving onto the next callback function, test to see if you're getting the expected results.
This may include increasing or decreasing the likelihood that a person will fall asleep.

## Update to Promises

- Navigate to the your summer-chores project.
- Inside the project, create a JavaScript file named promiseVersion.js
- Inside the file, write the same program as before, but using promises instead of callback functions.
- Update your doSummerChores function to chain your promises
- Update your README so that it aligns with what you've updated during this assignment.
- When finished, push your changes to your repository and submit the link to your GitHub repository

## Update to async/await

- Navigate to the your summer-chores project.
- Inside the project, create a JavaScript file named asyncAwaitVersion.js
- Inside the file, write the same program as before, but update the doSummerChores function to use async and await instead of chaining your promises.
- Update your README so that it aligns with what you've updated during this assignment.
- When finished, push your changes to your repository and submit the link to your GitHub repository