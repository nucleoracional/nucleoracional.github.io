const parPurple = document.getElementsByTagName('p')[0];
const parBlue   = document.getElementsByTagName('p')[1];
const parCyan   = document.getElementsByTagName('p')[2];
const parGreen  = document.getElementsByTagName('p')[3];
const parYellow = document.getElementsByTagName('p')[4];
const parOrange = document.getElementsByTagName('p')[5];
const parRed    = document.getElementsByTagName('p')[6];
const rainBow   = document.getElementById('principal');




function arcoiris(){
    parPurple.style.color = "purple";
    parBlue.style.color   = "blue";
    parCyan.style.color   = "cyan";
    parGreen.style.color  = "green";
    parYellow.style.color = "yellow";
    parOrange.style.color = "orange";
    parRed.style.color    = "red";
}




rainBow.addEventListener('mouseover',arcoiris);


