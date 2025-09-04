const addBtn = document.getElementById('add');

const htmlCollection = document.getElementsByClassName('para');
console.log('Initial HTML Collection: ', htmlCollection);

const nodeList = document.querySelectorAll('.para');
console.log('NodeList: ', nodeList);

addBtn.addEventListener('click', () => {
  const paraContainer = document.querySelector('div');

  const newPara = document.createElement('p');
  newPara.textContent = 'Para three';
  newPara.classList.add('para');

  paraContainer.appendChild(newPara);

  const todoCount = document.getElementById('todo-count');
  todoCount.textContent = `Total items: ${htmlCollection.length}`;

  //   console.log('After add:  HTML Collection: ', htmlCollection.length);
  //   console.log('After add: NodeList: ', nodeList.length);
});
