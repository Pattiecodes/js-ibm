//Declares the length and width that is needed for the function.
let length;
let width;

//Creates function to calculate the Area
function calculateArea() {
    //Gets user input for width and length
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

let area = length * width;
document.getElementById('result');
} 
//Commented Result of the calculation
//document.getElementById('result');