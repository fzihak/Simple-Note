const form = document.getElementById('input-box');
const submitBtn = document.getElementById('btn');
const noteContainer = document.querySelector('.note-container');
const deleteBtn = document.querySelector('.note-container');

submitBtn.addEventListener('click', function () {
    if (form.value.length >= 20) {
        // Created a flex div
    let noteList = document.createElement('div');
    noteList.classList.add('note-list');

    // Content div - flex item 1
    let noteContent = document.createElement('div');
    noteContent.classList.add('note-content')
    noteContent.innerText = form.value
    // Append child's to flex div
    noteList.appendChild(noteContent);
    
    //Delete button - flex item 2
    let deleteItem = document.createElement('div');
    deleteItem.classList.add('delete');
    deleteItem.innerHTML = '<i title="Delete" class="fa-solid fa-trash delete"></i>';
    // Appends child to flex div
    noteList.appendChild(deleteItem);

    // Appends flex div to main container
        noteContainer.appendChild(noteList)
        
        form.value = '';
        document.querySelector('.length').innerText = 'Minimum 20 characters'
    } else {
        alert('Enter minimum 20 characters');
}
    
})


// Delete items
deleteBtn.addEventListener('click', function () {
    if (event.target.classList.contains('fa-trash')) {
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
    } 
})


// Total text count
form.addEventListener('keyup', function () {
    let texts = form.value;
    document.querySelector('.length').innerText = `${texts.length} character & ${texts.split(" ").length} words`;
})
