const list = document.querySelector('ul');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');


/*list.append(listItem);*/

button.addEventListener('click', function () {if (input.value.trim() !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = input.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    listItem.append(deleteButton);
    list.append(listItem);
    input.value = '';
    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
        input.focus();});
} 
    
    else {
        alert('Enter Book and Chapter')}
    } ); 
    

    
    
    














