function newItem(){
    console.log("BUtton clicked!")
    //  Adding a new item to the list of items:
    let inputValue = $('#input').val();
    if (inputValue === '') {
        alert('You must write something!');
      } else{
        let li = $('<li></li>');
        li.text(inputValue);

        let list = $('#list');
        list.append(li);
      }

      // Crossing out an item from the list of items:
    function crossOut() {
        $(this).toggleClass('strike');
      }
  
      $('#list').on('dblclick', 'li', crossOut);

       //  Adding the delete button "X":
    let crossOutButton = $('<button>X</button>');
    crossOutButton.click(deleteListItem);
    li.append(crossOutButton);



}