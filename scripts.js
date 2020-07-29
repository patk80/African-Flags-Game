var flagsArray = [
    {
        name: "algeria",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/150px-Flag_of_Algeria.svg.png"
    },
    {
        name: "angola",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/150px-Flag_of_Angola.svg.png"
    },
    {
        name: "benin",
        url: "https://cdn.britannica.com/37/5037-004-E474738C/Flag-Benin.jpg"
    },
    {
        name: "botswana",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/150px-Flag_of_Botswana.svg.png"
    },
    {
        name: "burkina faso",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg"
    },
    {
        name: "burundi",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/150px-Flag_of_Burundi.svg.png"
    },
    {
        name: "cameroon",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/150px-Flag_of_Cameroon.svg.png"
    },
    {
        name: "cape verde",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/150px-Flag_of_Cape_Verde.svg.png"
    },
    {
        name: "central african republic",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/150px-Flag_of_the_Central_African_Republic.svg.png"
    },
    {
        name: "chad",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/150px-Flag_of_Chad.svg.png"
    },
    {
        name: "comoros",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/150px-Flag_of_the_Comoros.svg.png"
    },
    {
        name: "democratic republic of the congo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/150px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png"
    },
    {
        name: "republic of the congo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/150px-Flag_of_the_Republic_of_the_Congo.svg.png"
    },
    {
        name: "djibouti",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/150px-Flag_of_Djibouti.svg.png"
    },
    {
        name: "egypt",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/150px-Flag_of_Egypt.svg.png"
    },
    {
        name: "equatorial guinea",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/150px-Flag_of_Equatorial_Guinea.svg.png"
    },
    {
        name: "eritrea",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/150px-Flag_of_Eritrea.svg.png"
    },
    {
        name: "eswatini",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/150px-Flag_of_Eswatini.svg.png"
    },
    {
        name: "ethiopia",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/150px-Flag_of_Ethiopia.svg.png"
    },
    {
        name: "gabon",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/150px-Flag_of_Gabon.svg.png"
    },
    {
        name: "gambia",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/150px-Flag_of_The_Gambia.svg.png"
    },
    {
        name: "ghana",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/150px-Flag_of_Ghana.svg.png"
    },
    {
        name: "guinea",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/150px-Flag_of_Guinea.svg.png"
    },
    {
        name: "guinea-bissau",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/150px-Flag_of_Guinea-Bissau.svg.png"
    },
    {
        name: "ivory coast",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/150px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png"
    },
    {
        name: "kenya",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/150px-Flag_of_Kenya.svg.png"
    },
    {
        name: "lesotho",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/150px-Flag_of_Lesotho.svg.png"
    },
    {
        name: "liberia",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/150px-Flag_of_Liberia.svg.png"
    },
    {
        name: "libya",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/150px-Flag_of_Libya.svg.png"
    },
    {
        name: "madagascar",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/150px-Flag_of_Madagascar.svg.png"
    },
    {
        name: "malawi",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/150px-Flag_of_Malawi.svg.png"
    },
    {
        name: "mali",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/150px-Flag_of_Mali.svg.png"
    },
    {
        name: "mauritania",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/150px-Flag_of_Mauritania.svg.png"
    },
    {
        name: "mauritius",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/150px-Flag_of_Mauritius.svg.png"
    },
    {
        name: "morocco",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/150px-Flag_of_Morocco.svg.png"
    },
    {
        name: "mozambique",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/150px-Flag_of_Mozambique.svg.png"
    },
    {
        name: "namibia",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/150px-Flag_of_Namibia.svg.png"
    },
    {
        name: "niger",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/150px-Flag_of_Niger.svg.png"
    },
    {
        name: "nigeria",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/150px-Flag_of_Nigeria.svg.png"
    },
    {
        name: "rwanda",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/150px-Flag_of_Rwanda.svg.png"
    },
    {
        name: "sao tome and principe",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Sao_Tome_and_Principe.svg/150px-Flag_of_Sao_Tome_and_Principe.svg.png"
    },
    {
        name: "senegal",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/150px-Flag_of_Senegal.svg.png"
    },
    {
        name: "seychelles",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/150px-Flag_of_Seychelles.svg.png"
    },
    {
        name: "sierra leone",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/150px-Flag_of_Sierra_Leone.svg.png"
    },
    {
        name: "somalia",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/150px-Flag_of_Somalia.svg.png"
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
