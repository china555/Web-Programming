const timeoutId = setTimeout(function () {
    console.log("Second");
    clearTimeout(timeoutId);
}, 1000);


setImmediate(() => {
    console.log("Third");
});


let counter = 0;
const intervalId = setInterval(() => {
    if (counter === 10) {
        clearInterval(intervalId);
    }
    console.log(`Counter: ${counter}`);
    counter++;
}, 100);



console.log("First");
