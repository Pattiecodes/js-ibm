let count = 0; //Initialize count to 0.

function increaseCount() {
    count++;  //Increment the count by 1
    displayCount(); //Displays the count
    checkCountValue(); //Check the count value and display messages.
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; //Display the count in the HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 new followers! Keep it Up!")
    }
}