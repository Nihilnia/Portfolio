$('document').ready(() => {
    console.log("Ready to go.");

    // ?Password length
    // ?Include uppercase
    // ?Include lowercase
    // ?Include numbers
    // ?Include symbols

    //Elements
    var inpLength = $('#inpLength');
    var pwLowercase = $('#pwLowercase');
    var pwUppercase = $('#pwUppercase');
    var pwNumbers = $('#pwNumbers');
    var pwSymbols = $('#pwSymbols');
    var btnGenerate = $('#btnGenerate');
    var inpResult = $('#inpResult');

    // console.log(pwLowercase);

    //Funtions
    //- Math.Random();
    function randomNumb(x) {
        return Math.floor(Math.random() * x);
    };

    // console.log(randomNumb(100));

    //-String
    function randomStr() {
        return Math.random().toString(36).substr(2, 8);
    };

    // console.log(randomStr());

    function generatePass(pLenght, low3, upp3, numb3, symb0) {

        // console.log("Random numb:", randomNumb(12));

        var generatedPass = "";
        // console.log(pLenght);
        // console.log(low3);
        // console.log(upp3);
        // console.log(numb3);
        // console.log(symb0);

        //array here, selected ones to put in


        var upperCasez = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowerCasez = "abcdefghijklmnopqrstuvwxyz";
        var numberz = "0123456789";
        var symbolz = "!-_?,./\"'*}{[]£#$½";

        for (var f = 0; f < pLenght; f++) {


            //It works (finally) but not good. could be shorter.
            //When the contions not okay it starts over.


            var xChance = randomNumb(4);
            console.log("Lottery:", xChance);

            if (low3 && xChance == 0) {
                console.log("Lower picked:", lowerCasez[randomNumb(lowerCasez.length)]);
                generatedPass += lowerCasez[randomNumb(lowerCasez.length)]; //heh!
            } if (upp3 && xChance == 1) {
                console.log("Upper picked:", upperCasez[randomNumb(upperCasez.length)]);
                generatedPass += upperCasez[randomNumb(upperCasez.length)];
            } if (numb3 && xChance == 2) {
                console.log("Number picked:", numberz[randomNumb(numberz.length)]);
                generatedPass += numberz[randomNumb(numberz.length)];
            } if (symb0 && xChance == 3) {
                console.log("Symbol picked:", symbolz[randomNumb(symbolz.length)]);
                generatedPass += symbolz[randomNumb(symbolz.length)];
            }

            if (generatedPass.length <= f) {
                f--;
                console.log("Condition failed so", xChance);
            }
        }
        return generatedPass;
    }


    //Event
    btnGenerate.click(() => {
        console.log("%cUser clicked the generate button.", "color: #F28C28");

        l3ngth = inpLength.val();
        console.log("%cSelected length:", "color: #F28C28", l3ngth);

        lowerCase = pwLowercase.prop('checked');
        console.log("%cIs lowercase selected?:", "color: #F28C28", lowerCase);

        upperCase = pwUppercase.prop('checked');
        console.log("%cIs upperCase selected?:", "color: #F28C28", upperCase);

        numberz = pwNumbers.prop('checked');
        console.log("%cIs numberz selected?:", "color: #F28C28", numberz);

        symbolz = pwSymbols.prop('checked');
        console.log("%cIs symbolz selected?:", "color: #F28C28", symbolz);

        // console.log("Given length", inpLength.val());
        // console.log("lowerCase", lowerCase);
        // console.log("lowerCase", upperCase);
        // console.log("symbolz", numberz);
        // console.log("numberz", symbolz);

        var daResult = generatePass(l3ngth, lowerCase, upperCase, numberz, symbolz);

        console.log("%cGenerated pass", "background-color: Green", daResult);

        //If there is a result click event shouldn' t delete the output.
        inpResult.val("Result..");
        if (inpResult.val().length == daResult.length || inpResult.val().length > 0) {
            inpResult.val(daResult);
        } else {
            inpResult.click(() => {
                inpResult.val("");
            })
        };


    });



















});