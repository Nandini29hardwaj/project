
let toDoList = [
{
  item:'do dsa',
  dueDate:`02/09/2024`
}, 
{
  item:'do art',
  dueDate:`02/09/2024`
}
]; 

displayItems();

function addToDo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let toDoItem = inputElement.value;
  let toDoDate= dateElement.value;
  console.log(toDoItem);
  toDoList.push({item: toDoItem,dueDate:toDoDate});
  inputElement.value= '';
  dateElement.value= '';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');
  let newHtml = ``;
  for(let i=0;i<toDoList.length;i++){
    // let item = toDoList[i].item;
    // let dueDate = toDoList[i].dueDate;
    let {item,dueDate} =toDoList[i];
  
    newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="toDoList.splice(${i},1);displayItems();">Delete</button> 
    `; 
  }  
  containerElement.innerHTML= newHtml;
}