let antworten = document.getElementsByClassName("freshField");
let ant = document.getElementById("ant");


function pruefen() {
    let fa = parseInt(antworten[0].value);
    let fb = parseInt(antworten[1].value);
    let fc = parseInt(antworten[2].value);
    console.log("Prüfe auf fehler");
    console.log(fa);
    console.log(fb);
    console.log(fc);
    let erg = (3*fa)+ (4*fb)  + (2*fc);
    console.log(erg);
    if (erg==44) {
        console.log("RICHTIG")
        ant.innerHTML = "DAS IST RICHTIG!!!"
        ant.classList.add("richtig")
        ant.classList.remove("falsch");
    } else {
        ant.classList.remove("richtig");
        ant.classList.add("falsch");
        ant.innerHTML = "DAS IST FLASCH!!!";
        console.log("FALSCH");
    }
}









let gAForm = document.getElementsByTagName("form");
for (let i = 0; i < 4; i++) {
    gAForm[0].addEventListener('submit', 
        function(e) {
            e.preventDefault();
            
        }, false
    );
}
