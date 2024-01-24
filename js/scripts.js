function newItem(){
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

}