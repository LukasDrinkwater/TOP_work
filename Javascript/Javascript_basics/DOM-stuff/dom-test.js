const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);



const content2 = document.createElement('p');
content2.classList.add('paraText');
content2.textContent = 'Hey Im Red!';

container.appendChild(content2);

let divStyle2 = document.querySelector('p').style;
divStyle2.color = 'blue';



const content3 = document.createElement('div');
content3.id = 'content3'
content3.classList.add('content3');
content3.setAttribute('stle', 'border: black; background: pink;');


const content3h1 = document.createElement('h1');
content3h1.classList.add('content3h1');
content3h1.textContent = "I'm in a div";

const content3p = document.createElement('p');
content3p.classList.add('content3p');
content3p.textContent = "ME TOO!";

container.appendChild(content3h1);
container.appendChild(content3p);