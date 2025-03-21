let guessA = document.getElementById("guessA");

console.log("a");
console.log(guessA.value);
function checkA(e) {
    
}

guessA.addEventListener("input", 
    function(e) {
        console.log(guessA.value);
        if (guessA.value==4) {
            console.log("RICHTIG!")
            document.getElementById("worta").innerHTML = "Das ist Richtig!";
            document.getElementById("worta").classList.add("richtig");
        }
    }, false
);


let gAForm = document.getElementsByTagName("form")[0];
gAForm.addEventListener('submit', 
    function(e) {
        e.preventDefault();
        
    }, false
);