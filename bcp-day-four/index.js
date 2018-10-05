function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;

    var guess = elements.guess.value;

    var result = document.getElementById("result");

    if(guess == 5){
        result.textContent = "Correct!";
    } else if(guess < 5){
        result.textContent = "Too low!";
    } else {
        result.textContent = "Too high!";
    }
}



