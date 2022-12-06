const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT");
}





btn.onclick = alertFunction;

btn.addEventListener('click', function (e) {
    console.log(e);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});




// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iteratre through each button
buttons.forEach((button) => {
    //and for each one we add a 'click listener'
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
