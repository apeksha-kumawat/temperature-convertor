let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}

function kelToCel(){
    let output = ( parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}
function celToKel(){
    let output = ( parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat( output.toFixed(2));
    console.log(output);
}

function kelToFar(){
    
    let output =  parseFloat(9/5 *(kelvin.value) - 459.67);
    fahrenheit.value = parseFloat( output.toFixed(2));
    console.log(output);
}
function farToKel(){
    let output = (parseFloat(fahrenheit.value) + 459.67)* 5/9;
    kelvin.value = parseFloat( output.toFixed(2));
    console.log(output);
}

