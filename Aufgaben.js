let guessA = document.getElementById("guessA");
let guessB = document.getElementById("guessB");
let guessC = document.getElementById("guessC");


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

guessA.addEventListener("input", //Check A
    function(e) {
        console.log(guessA.value);
        let wort = document.getElementById("worta");
        if (guessA.value==4)  {
            console.log("RICHTIG!")
            wort.innerHTML = "Das ist Richtig!";
            wort.classList.remove("falsch");
            wort.classList.add("richtig");
        } else {
            wort.innerHTML = "Das ist Falsch!";
            wort.classList.remove("richtig");
            wort.classList.add("falsch");
        }
    }, false
);

guessB.addEventListener("input", //Check A
    function(e) {
        console.log(guessB.value);
        let wort = document.getElementById("wortb");
        if (guessB.value==3) {
            console.log("RICHTIG!")
            wort.innerHTML = "Das ist Richtig!";
            wort.classList.remove("falsch");
            wort.classList.add("richtig");
        } else {
            wort.innerHTML = "Das ist Falsch!";
            wort.classList.remove("richtig");
            wort.classList.add("falsch");
        }
    }, false
);

guessC.addEventListener("input", //Check A
    function(e) {
        console.log(guessA.value);
        if (guessC.value==3) {
            console.log("RICHTIG!")
            document.getElementById("worta").innerHTML = "Das ist Richtig!";
            document.getElementById("worta").classList.add("richtig");
        }
    }, false
);

let gAForm = document.getElementsByTagName("form");
for (let i = 0; i < 4; i++) {
    gAForm[0].addEventListener('submit', 
        function(e) {
            e.preventDefault();
            
        }, false
    );
}
