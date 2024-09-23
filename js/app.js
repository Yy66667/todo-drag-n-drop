
let i=0;
let box1 = document.querySelector('.box1');
let selectedCategory;

function addtodo(section){
   
    document.querySelector('.addfeature').classList.add('addfeatureAfter')
    document.querySelector('.addfeature').classList.remove('addfeature')

selectedCategory = section;
}


// handle the dragstart

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    
    
}



// select the item element
const items = document.querySelectorAll('.item');

// attach the dragstart event handler

items.forEach(item=>{
    item.addEventListener('dragstart', dragStart);})

    const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

       // get the draggable element
       const id = e.dataTransfer.getData('text/plain');
       const draggable = document.getElementById(id);
   
       // add it to the drop target
       e.target.appendChild(draggable);
   
       // display the draggable element
       draggable.classList.remove('hide');

}

document.querySelector('.add').addEventListener('click',()=>{

    const title = document.querySelector('.input-title').value;

    const descrip = document.querySelector('.input-description').value;

    const option = document.querySelector('.select').value;



        i++;
    console.log(document.querySelector(`.${selectedCategory}`).innerHTML +=  `<div class="item" id="item${i}" draggable="true">
       
        <div class="title">${title}</div>
        <div class="descrip">${descrip}</div>
       
        <div class="option">${option}</div>
       
    </div>`)

    document.querySelector('.addfeatureAfter').classList.add('addfeature');
    document.querySelector('.addfeature').classList.remove('addfeatureAfter')


// select the item element
const items = document.querySelectorAll('.item');

// attach the dragstart event handler

items.forEach(item=>{
    item.addEventListener('dragstart', dragStart);})


    boxes.forEach(box => {
        box.addEventListener('dragenter', dragEnter)
        box.addEventListener('dragover', dragOver);
        box.addEventListener('dragleave', dragLeave);
        box.addEventListener('drop', drop);
    });


    document.querySelector('.input-title').value='';
 
    document.querySelector('.input-description').value='';

    document.querySelector('.select').value='Low';


})