// This file is part of the Summer Chores project.

// Create a person.
const person = 'Aaron';

// mowYard:  A function that will take in a person's name and a callback function.
// When the chore is complete, log "PERSON'S NAME mowed the yard." to the console.
// Time to mow the yard - 2000ms

function mowYard(person, callback) {
    setTimeout(() => {
        console.log(`${person} mowed the yard.`);
        callback(weedEat);
    }, 2000);
}

// weedEat:  A function that will take in a person's name and a callback function.
// If the chore is completed, log "PERSON'S NAME finished using the weed eater." to the console and call the next callback function.
// Otherwise, log "PERSON'S NAME fell asleep after mowing the yard." to the console.
// Time to weed eat the yard - 1500ms

function weedEat(person, callback) {
    setTimeout(() => {
        if (Math.random() > 0.1) {
            console.log(`${person} finished using the weed eater.`);
            callback(trimHedges);
        } else {
            console.log(`${person} fell asleep after mowing the yard.`);
        }
    }, 1500);
}

// trimHedges:  A function that will take in a person's name and a callback function.
// If the chore is completed, log "PERSON'S NAME finished trimming the hedges." to the console and call the next callback function.
// Otherwise, log "PERSON'S NAME fell asleep after weed eating the yard." to the console.
// Time to trim the hedges - 1000ms

function trimHedges(person, callback) {
    setTimeout(() => {
        if (Math.random() > 0.2) {
            console.log(`${person} finished trimming the hedges.`);
            callback(collectWood);
        } else {
            console.log(`${person} fell asleep after weed eating the yard.`);
        }
    }, 1000);
}

// collectWood:  A function that will take in a person's name and a callback function.
// If the chore is completed, log "PERSON'S NAME finished collecting wood." to the console and call the next callback function.
// Otherwise, log "PERSON'S NAME fell asleep after trimming the hedges." to the console.
// Time to collect wood - 2500ms

function collectWood(person, callback) {
    setTimeout(() => {
        if (Math.random() > 0.3) {
            console.log(`${person} finished collecting wood.`);
            callback(waterGarden);
        } else {
            console.log(`${person} fell asleep after trimming the hedges.`);
        }
    }, 2500);
}

// waterGarden:  A function that will take in a person's name and a callback function.
// If the chore is completed, log "PERSON'S NAME finished watering the garden." to the console and call the next callback function.
// Otherwise, log "PERSON'S NAME fell asleep after collecting wood." to the console.
// Time to water the garden - 500ms

function waterGarden(person, callback) {
    setTimeout(() => {
        if (Math.random() > 0.4) {
            console.log(`${person} finished watering the garden.`);
            callback(finishedChores);
        } else {
            console.log(`${person} fell asleep after collecting wood.`);
        }
    }, 500);
}

// finishedChores:  A function that will take in a person's name and a callback function.
// This function will be called after all the chores are completed successfully.

function finishedChores(person) {
        console.log(`${person} finished all their chores!`);
}

// doSummerChores:   A function that will take in a person's name as an argument.
// This method will call the mowYard function, essentially wrapping your "callback hell."
// If all the chores are completed successfully, the function should log "PERSON'S NAME finished all their chores!"

function doSummerChores(person) {
    mowYard(person, (nextChore) => {
        nextChore(person, (nextChore) => {
            nextChore(person, (nextChore) => {
                nextChore(person, (nextChore) => {
                    nextChore(person, () => {
                        finishedChores(person);
                    });
                });
            });
        });
    });
}

// Start the summer chores for the person.
doSummerChores(person);