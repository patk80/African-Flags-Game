var flagsArray = [
    {
        name: "benin",
        url: "https://cdn.britannica.com/37/5037-004-E474738C/Flag-Benin.jpg"
    },
    {
        name: "burkina faso",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg"
    },
    {
        name: "cambodia",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png"
    },
    {
        name: "canada",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/255px-Flag_of_Canada_%28Pantone%29.svg.png"
    }
];

// var randomNumber = Math.floor(Math.random() * flagsArray.length);

function randomIndex() {
    randomNumber = Math.floor(Math.random() * flagsArray.length);
    return randomNumber;
}

function randomFlag(){
    randomIndex();
    console.log(randomNumber);
    $("img").attr("src", flagsArray[randomNumber].url);
}

function checkAnswer() {
    var userAnswer = $("input").val().toLowerCase();
    
    if(userAnswer === flagsArray[randomNumber].name) {
        console.log("Correct");
        $("body").css("background", "green");
    } else {
        console.log("WRONG");
        $("body").css("background", "red");
    }
    $("input").val("");
}

// generate new random flag //
$("#start-button").on("click", function(){
    randomFlag();
    $("#start-button").css("visibility", "hidden");
    $("#input-for-answers").css("visibility", "visible");
    $("#submit-button").css("visibility", "visible");
});
// check user's answer on submit button click //
$("#submit-button").on("click", function(){
    checkAnswer();
    randomFlag();
});
// check user's answer on enter button press //
$("input").on('keypress',function(e) {
    if(e.which == 13) {
        checkAnswer();
        randomFlag();
    }
});