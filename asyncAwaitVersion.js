// This file is part of the Summer Chores project.

// Create a person.
const person = 'Aaron';

// mowYard:  A function that will take in a person's name and a callback function.
// When the chore is complete, log "PERSON'S NAME mowed the yard." to the console.
// Time to mow the yard - 2000ms

function mowYard(person) {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(`${person} mowed the yard.`);
        }, 2000);
    });
}

// weedEat:  A function that will take in a person's name and a callback function.
// If the chore is completed, log "PERSON'S NAME finished using the weed eater." to the console and call the next callback function.
// Otherwise, log "PERSON'S NAME fell asleep after mowing the yard." to the console.
// Time to weed eat the yard - 1500ms

function weedEat(person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(`${person} finished using the weed eater.`);
            } else {
                reject(`${person} fell asleep after mowing the yard.`);
            }
        }, 1500);
    });
}

// trimHedges:  A function that will take in a person's name and a callback function.
// If the chore is completed, log "PERSON'S NAME finished trimming the hedges." to the console and call the next callback function.
// Otherwise, log "PERSON'S NAME fell asleep after weed eating the yard." to the console.
// Time to trim the hedges - 1000ms

function trimHedges(person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve(`${person} finished trimming the hedges.`);
            } else {
                reject(`${person} fell asleep after weed eating the yard.`);
            }
        }, 1000);
    });
}

// collectWood:  A function that will take in a person's name and a callback function.
// If the chore is completed, log "PERSON'S NAME finished collecting wood." to the console and call the next callback function.
// Otherwise, log "PERSON'S NAME fell asleep after trimming the hedges." to the console.
// Time to collect wood - 2500ms

function collectWood(person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve(`${person} finished collecting wood.`);
            } else {
                reject(`${person} fell asleep after trimming the hedges.`);
            }
        }, 2500);
    });
}

// waterGarden:  A function that will take in a person's name and a callback function.
// If the chore is completed, log "PERSON'S NAME finished watering the garden." to the console and call the next callback function.
// Otherwise, log "PERSON'S NAME fell asleep after collecting wood." to the console.
// Time to water the garden - 500ms

function waterGarden(person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.4) {
                resolve(`${person} finished watering the garden.`);
            } else {
                reject(`${person} fell asleep after collecting wood.`);
            }
        }, 500);
    });
}

// finishedChores:  A function that will take in a person's name and a callback function.
// This function will be called after all the chores are completed successfully.

function finishedChores(person) {
    return new Promise((resolve) => {
        resolve(`${person} finished all their chores!`);
    });
}

// Chain promises with async/await to perform the summer chores in order.
// If all the chores are completed successfully, the function should log "PERSON'S NAME finished all their chores!"
// If any chore fails, it should log the error message.

async function doSummerChores(person) {
    try {
        const mowYardResult = await mowYard(person);
        console.log(mowYardResult);

        const weedEatResult = await weedEat(person);
        console.log(weedEatResult);
        
        const trimHedgesResult = await trimHedges(person);
        console.log(trimHedgesResult);
        
        const collectWoodResult = await collectWood(person);
        console.log(collectWoodResult);
        
        const waterGardenResult = await waterGarden(person);
        console.log(waterGardenResult);
        
        const finishedChoresResult = await finishedChores(person);
        console.log(finishedChoresResult);
    }
    catch (error) {
        console.error(error);
    }
}

// Start the summer chores for the person.
doSummerChores(person);