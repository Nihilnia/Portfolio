$('document').ready(() => {
    console.log('R.');

    var daBody = $('html');
    var btnClear = $('#btnClear');

    var leftSingle = $('#leftSingle');
    var leftDouble = $('#leftDouble');

    var wheelSingle = $('#wheelSingle');
    var wheelDouble = $('#wheelDouble');

    var rightSingle = $('#rightSingle');
    var rightDouble = $('#rightDouble');


    var singleLeft = 0;
    var doubleLeft = 0;

    var singleWheel = 0;
    var doubleWheel = 0;

    var singleRight = 0;
    var doubleRight = 0;

    daBody.on('mousedown', (x) => {



        if (x.which === 1) {
            console.log("left");
            singleLeft++;
            leftSingle.html(`${singleLeft}`);
            if (x.detail === 1) {
                console.log("left dbl.");
                doubleLeft++;
                leftDouble.html(`${doubleLeft}`);
            };
        };
        if (x.which === 2) {
            console.log("left");
            singleWheel++;
            leftSingle.html(`${singleWheel}`);
            if (x.detail === 2) {
                console.log("left dbl.");
                doubleWheel++;
                leftDouble.html(`${doubleWheel}`);
            };
        };

        if (x.which === 3) {
            console.log("left");
            singleRight++;
            leftSingle.html(`${singleRight}`);
            if (x.detail === 3) {
                console.log("left dbl.");
                doubleLeft++;
                doubleRight.html(`${doubleRight}`);
            };

        };


    })

});