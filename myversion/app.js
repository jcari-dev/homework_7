$(() => {
  // Basically I have here all the variables declared with a selector in html
      let $todoList = $('#toDo');
      let $listDone = $('#complete');
      let $input = $('#addToList').val("");
      let $submit = $('#btnAdd');
      // GIVEN TODOS ARRAY - DO NOT ERASE!
      const givenToDos = [
        'buy some sand',
        'comb the unicorn',
        'brush my fang',
        'water the hardwoods'
      ]
      // I did an empty array for the input from the text box
      const newGiven = []
      const loop = () => {
        for (let i = 0; i < givenToDos.length; i++) {
          $todoList.append(`<div class="to-do-item">${givenToDos[i]}<br><button class="btnDone">Completed<br></button><br><br>`);
        }
      } //did a for loop and I appended each index to the "Things to Do", while looping I added a button and a 2 classes to each index in the array

      loop(); //executed the function here so it appears right after the page load

      const addToList = () => { //new function to add values from the text box to the empty array
        if ($input.val().length == 0) { // if the user doesn't input anything alerts the following
          alert('You did not input anything!')
        } else if ($input.val().length <= 2) { // if the user only input 2 characters alerts the following 
          alert('Please be more descriptive!')
        } else { // I push the new element into the array and I give the name of what the user input, while pushing I add a button
            newGiven.push(`<div class="to-do-item">${$input.val()}<br><button class="btnDone">Completed<br></button><br><br>`);
            for (let j = 0; j < newGiven.length; j++) { 
              $todoList.append(newGiven[j]); // I append the new index to the list "Things to Do"
              newGiven.pop(); // I pop the last value to avoid pushing the whole list again 
            
            }

          }

        }

        $submit.on('click', addToList); //function for the "Submit" button


        $('.btnDone').click(function (event) { // function for the "Completed" button for the items in the "Things to Do" list.
          $(this).text("Remove"); // change the value of the button from "Completed" to "Remove" buttons that were already there from the givenArray

        });
        $(document).on('click', '.btnDone', function (event) { //function for THE BUTTONS DYNAMICALLY CREATED AFTER THE PAGE LOADED WOW THIS WAS SO DIFFICULT BUT EVENT DELEGATION MAKES SENSE
          $(this).removeClass('btnDone'); // remove the class of the button to add a new functionality in another function
          $(this).addClass('gone');
          $(this).text("Remove"); // change the text of the BUTTONS CREATED AFTER THE PAGE WAS LOADED

        });


        $(document).on('click', '.to-do-item', function (event) { //function for things added to the list AFTER THE PAGE WAS LOADED basically the things that the user input
          $(this).removeClass('to-do-item'); 
          $(this).addClass('gone'); // removed the class and added a new one to use it on a new function
          $(this).detach().appendTo($listDone); // basically detach the div from the "Things to Do" list and append it to the "Completed" List
        })

        $(document).on('click', '.gone', function (event) {
          $(this).remove(); // remove all the elements with the class .gone, which basically are all the elements that have been changed from list "Things to Do" to "Completed"
        })
        // Tried to specify my code a lot more, will continue improving, tried to add a reject duplicated input, but failed and im running out time >.<, best of luck!
      });