$("document").ready(function () {
    console.log('1001110_');
    console.log('\n\n');
    console.log('Ready to go.\n\n');

    var inpUserInput = $('#inpUserInput');
    inpUserInput.click(function () {
        inpUserInput.attr('placeholder', '');
    });

    var inpUserResult = $('#inpUserResult');
    inpUserResult.click(function () {
        inpUserResult.attr('placeholder', '');
    });

    var choiceToBinary = $('#choiceToBinary');
    var choiceToText = $('#choiceToText');

    choiceToBinary.click(function () {
        console.log('%cText to binary option selected.\n\n', 'color: orange');
        inpUserInput.attr('placeholder', 'Enter your text here..')
        inpUserResult.attr('placeholder', 'Result..');
        inpUserInput.val('');
        inpUserResult.val('');
    });

    choiceToText.click(function () {
        console.log('%cBinary to text option selected.\n\n', 'color: orange');
        inpUserInput.attr('placeholder', 'Enter your binary here..')
        inpUserResult.attr('placeholder', 'Result..');
        inpUserInput.val('');
        inpUserResult.val('');
    });



    var btnConvert = $('#btnConvert');

    function convertEm(choice) {

        var getUserInput = inpUserInput.val();

        var result = "";

        if (choice == 'textToBinary') {
            console.log('%cText to binary option worked..', 'color: #00FF41');
            for (var f = 0; f < getUserInput.length; f++) {
                result += getUserInput[f].charCodeAt(0).toString(2) + " ";
            }
        } else {
            console.log('%cBinary to text option worked.', 'color: #00FF41');

            result = getUserInput
                .split(' ')
                .map(bin => String.fromCharCode(parseInt(bin, 2)))
                .join('');
        }


        console.log('%cResult is:', 'color: #0437F2', result, '\n\n');
        inpUserResult.val(result);
    };


    btnConvert.click(function () {

        console.log('User pressed the convert button.');

        if ($('#choiceToBinary').is(':checked')) {
            convertEm("textToBinary");
        } else {
            convertEm("ah");
        }
    });
});


