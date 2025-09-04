// # getting elemet via id
const subHeading = document.getElementById('sub-heading');
console.log('getElementById: ', subHeading);

subHeading.innerText = 'JavaScript is super cool!';
subHeading.style.color = 'red';
subHeading.classList.add('m-2', 'bg-yellow-500');

// # getting multiple elements via class name
const paras = document.getElementsByClassName('para');
console.log('getElementsByClassName: ', paras);

// console.log(paras[1]);

// looping through a HTML Collection
for (let i = 0; i < paras.length; i++) {
  //   console.log(paras[i]);
}

// OR: creating an array first, then using array.methods()
const parasArray = [...paras];
console.log(parasArray);

parasArray.forEach((i) => console.log(i));

// OR use built in Object Array
const paraArray = Array.from(paras);
console.log(paraArray);

// # get elemets by tag/element name
const parasByTagName = document.getElementsByTagName('p');
console.log('getElementsByTagName: ', parasByTagName);

// # selecting via query selector
const subHeadingUsingQS = document.querySelector('#sub-heading');
console.log('querySelector: ', subHeadingUsingQS);

const paraUsingQS = document.querySelectorAll('.para');
console.log('querySelectorAll: ', paraUsingQS);

const firstParaUsingQS = document.querySelector('.para');
console.log('querySelector: ', firstParaUsingQS);

// # Functions
// # Creating Elements
const paraContainer = document.querySelector('.para-container');

const createPara = (parameter) => {
  const newPara = document.createElement('p');
  newPara.textContent = parameter;
  // newPara.innerHTML = 'JS created this para'; // do NOT use, vunerable to XSS attacks
  // # change class
  newPara.setAttribute('class', 'para');
  // OR
  // newPara.classList.add('para');

  // console.log(paraContainer);
  paraContainer.appendChild(newPara);
};

// for ... of loop
for (const para of paras) {
  //   console.log(para);
  //   console.log(para.textContent);
  para.style.color = 'blue';
}

createPara('JS created this para');
createPara('JS created this para again');
// createPara('JS created this para again, again');

// # Event listeners
const changeColorBtn = document.getElementById('change-color-btn');
// OR
// const changeColorBtn = document.querySelector('#change-color-btn');

const handleClick = () => {
  const newColor = subHeading.style.color === 'blue' ? 'red' : 'blue';
  console.log(newColor);
  subHeading.style.color = newColor;
};
// naming convention: handleClick, handleSubmit, onSubmit, onClick

changeColorBtn.addEventListener('click', handleClick);

window.addEventListener('load', () => {
  console.log('Page has been loaded');
});

// # Forms
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newParagrahp = event.target.newparagraph.value;
  //   console.log(typeof newParagrahp);

  if (!newParagrahp) {
    alert('Please enter a text');
    return;
  }

  if (newParagrahp.length < 3) {
    return;
  }

  if (newParagrahp.length > 100) {
    return;
  }

  //   Security: Basic XSS prevention check
  if (newParagrahp.includes('<script>')) {
    alert('Invalid input detected');
    return;
  }

  //   console.log('Form has submitted');
  createPara(newParagrahp);
  event.target.newparagraph.value = '';
  //   event.target.reset();
});
