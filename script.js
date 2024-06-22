const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const content = document.querySelector("#counter");

const increment = () =>{
    let sampleText = Number(content.innerText);
    sampleText = sampleText + 1;
    content.innerText = sampleText;
}

const decrement = () =>{
    let sampleText = Number(content.innerText);
    sampleText = sampleText - 1;
    content.innerText = sampleText;
}

/*
inc.addEventListener("click", ()=>{
    let sampleText = Number(content.innerText);
     sampleText = sampleText + 1;
     content.innerText = sampleText;
});

dec.addEventListener("click", ()=>{
    let sampleText = Number(content.innerText);
    sampleText = sampleText - 1;
    content.innerText = sampleText;
});
 */