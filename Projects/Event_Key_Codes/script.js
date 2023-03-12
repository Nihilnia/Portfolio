$('document').ready(() => {
    console.log("Ready to go.");

    //Elements
    var divDataz = $('#divDataz');
    var daBody = $('body');

    //Events
    daBody.keypress((f) => {
        divDataz.html(`
        
                <!-- Result-->
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">Pressed key:</label>
                    <input type="text" id="form2Example2" class="form-control daData" placeholder = '${f.key}'
                    <label class="form-label" for="form2Example2">Key code:</label>
                    <input type="text" id="form2Example2" class="form-control daData" placeholder = '${f.which == 66 ? 69 : f.which}'
                    <label class="form-label" for="form2Example2">Alt key?</label>
                    <input type="text" id="form2Example2" class="form-control daData" placeholder = '${f.altKey == true ? 'Yes' : 'No'}'
                    <label class="form-label" for="form2Example2">Shift key?</label>
                    <input type="text" id="form2Example2" class="form-control daData" placeholder = '${f.shiftKey == true ? 'Yes' : 'No'}'
                    <label class="form-label" for="form2Example2">Meta key?</label>
                    <input type="text" id="form2Example2" class="form-control daData" placeholder = '${f.metaKey == true ? 'Yes' : 'No'}' />
                
                    <br/>
                    <!-- Copy button -->
                    <button onClick = 'copyTheResults()' type="button" id = 'copyData' class="btn  btn-block mb-4" style='background-color: #b24250; margin: 0 auto; display: block;'>Copy <i class="fa-regular fa-clipboard"></i></button>
                    </div>
        `);
    });

});