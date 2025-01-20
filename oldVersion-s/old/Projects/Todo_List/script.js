$('document').ready(() => {
    console.log("R.");


    //Elementz
    var inpMainTodo = $('#mainTodo');
    var todoList = $('#allTodoz');



    //Function
    var key = 0;
    function newTodo(whatIsTheMission) {
        key += 1;
        var newMission = `
        <label class="form-label toddo" for="form3Example3">${key}- Todo</label>
        <input type="text" id="todo_${key}" class="form-control form-control-lg" placeholder="${whatIsTheMission}" onClick="getElement(this.id)"/>`;

        todoList.append(newMission);
    };

    inpMainTodo.keypress((f) => {
        if (f.keyCode == 13) {
            newTodo(inpMainTodo.val());
            inpMainTodo.val("");
        };
    });





});