// function to generate random index number from flags.js file //
function randomIndex() {
    randomNumber = Math.floor(Math.random() * flagsArray.length);
    return randomNumber;
}

// function to display the flag of the random index number generated in randomIndex function //
function randomFlag(){
    randomIndex();
    $("img").attr("src", flagsArray[randomNumber].imagePath);
}

// generate new random flag when user clicks "Start" button //
$("#start-button").on("click", function(){
    randomFlag();
    $("#start-button").css("display", "none");
    $("#input-for-answers").css("visibility", "visible");
    $("#submit-button").css("visibility", "visible");
});

// function to evaluate the user's input //
function checkAnswer() {
    var userAnswer = $("input").val().toLowerCase();
    
    if(userAnswer === flagsArray[randomNumber].name) {
        $("body").removeClass("wrong");
        $("body").addClass("correct");
    } else {
        alert("WRONG - that was " + flagsArray[randomNumber].name);
        $("body").removeClass("correct");
        $("body").addClass("wrong");
    }
    $("input").val("");
}

// check user's answer on submit button click //
$("#submit-button").on("click", function(){
    checkAnswer();
    randomFlag();
});

// check user's answer on enter button press //
$("input").on('keypress',function(e) {
    if(e.code === "Enter") {
        checkAnswer();
        randomFlag();
    }
});
