document.addEventListener('DOMContentLoaded', function () {
    const txtTitle = document.getElementById('txtTitle');
    const txtDetails = document.getElementById('txtDetails');
    const btnAdd = document.getElementById('btnAdd');
    const btnClear = document.getElementById('btnClear');
    const btnFIFO = document.getElementById('btnFIFO');
    const btnFILO = document.getElementById('btnFILO');
    const btnReset = document.getElementById('btnReset');
    const todoContainer = document.getElementById('todoContainer');
    const doneContainer = document.getElementById('doneContainer');
    
    btnAdd.addEventListener('click', addTask);
    btnClear.addEventListener('click', clearForm);
    btnFIFO.addEventListener('click', processTasksFIFO);
    btnFILO.addEventListener('click', processTasksFILO);
    btnReset.addEventListener('click', resetLists);
    
    function addTask() {
    const title = txtTitle.value.trim();
    const details = txtDetails.value.trim();
    
    if (title === '' || details === '') {
    alert('Please enter both title and details.');
    return;
    }
    
    const taskItem = createTaskItem(title, details);
    todoContainer.appendChild(taskItem);
    
    clearForm();
    }
    
    function createTaskItem(title, details) {
    const card = document.createElement('div');
    card.classList.add('col-md-4');
    
    const taskCard = document.createElement('div');
    taskCard.classList.add('card', 'mb-3');
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = title;
    
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerText = details;
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    taskCard.appendChild(cardBody);
    card.appendChild(taskCard);
    
    return card;
    }
    
    function clearForm() {
    txtTitle.value = '';
    txtDetails.value = '';
    }
    
    function processTasksFIFO() {
    moveTasks(todoContainer, doneContainer, 'FIFO');
    }   
    
    function processTasksFILO() {
    moveTasks(todoContainer, doneContainer, 'FILO');
    }
    
    function moveTasks(source, destination, approach) {
    const tasks = source.getElementsByClassName('col-md-4');
    
    if (approach === 'FIFO') {
    while (tasks.length > 0) {
    destination.appendChild(tasks[0]);
    }
    } else if (approach === 'FILO') {
    for (let i = tasks.length - 1; i >= 0; i--) {
    destination.appendChild(tasks[i]);
    }
    }
    }
    
    function resetLists() {
    clearChildren(todoContainer);
    clearChildren(doneContainer);
    }
    
    function clearChildren(element) {
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
    }
    });