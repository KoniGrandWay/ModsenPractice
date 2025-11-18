function promisesSequence() {
    console.log('Start...');
    
    new Promise(resolve => {
        setTimeout(() => {
            console.log('First.');
            resolve();
        }, 1000);
    })
    .then(() => new Promise(resolve => {
        setTimeout(() => {
            console.log('Second..');
            resolve();
        }, 1000);
    }))
    .then(() => new Promise(resolve => {
        setTimeout(() => {
            console.log('Third...');
            resolve();
        }, 1000);
    }))
    .then(() => {
        console.log('Finale.');
    });
}



promisesSequence();
