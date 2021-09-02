// const workBtn = document.querySelector("#work-btn");
// workBtn.addEventListener("click", () => {
//     let final = 0;
//     for (let i = 0; i < 10000000000; i++){
//         final += i;
//     }
    
//     document.querySelector("#output").innerHTML = final;
// });

// const randomBtn = document.querySelector("#btn");
// randomBtn.addEventListener("click", () => {
//     document.querySelector("#random").innerHTML = "Random text displayed"
// });



const workBtn = document.querySelector("#work-btn");
workBtn.addEventListener("click", () => {
    const myWorker = new Worker("worker.js");
    myWorker.postMessage("do some work");
    myWorker.onmessage = function (e) {
        console.log(e.data)
        document.querySelector("#output").innerHTML = e.data;
    }
});

const randomBtn = document.querySelector("#btn");
randomBtn.addEventListener("click", () => {
    document.querySelector("#random").innerHTML = "Random text displayed"
});