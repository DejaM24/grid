 let myPromise = new Promise((resolve) => {
    setTimeout(()=> {
        console.log("delayed for 3 seconds");
        resolve();
    }, 3000);
});

console.log(1);
myPromise.then(() => {
    console.log("promise fulfilled");
});
setTimeout(() => {
    console.log(2);
}, 500);
console.log(3);