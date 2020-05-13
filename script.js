//     //Event Behavior
// var inner = document.querySelector('#inner');
// var outer = document.querySelector('#outer');
// inner.addEventListener('click', innerListener);
// outer.addEventListener('click', outerListener);
// function innerListener(event) {
//     console.log('Clicked inner!');
// };
// function outerListener(event) {
//     console.log('Clicked outer!');
// }
// //In this exampple if we click on yellow div, we can see in console log output both output's, in this case for bellow example will use the stop event propagation method!

// var inner = document.querySelector('#inner');
// var outer = document.querySelector('#outer');
// inner.addEventListener('click', innerListener);
// outer.addEventListener('click', outerListener);
// function innerListener(event) {
//     event.stopPropagation();
//     console.log('Clicked inner!');
// };
// function outerListener(event) {
//     console.log('Clicked outer!');
// }

// var inner = document.querySelector('#inner');
// var outer = document.querySelector('#outer');
// inner.addEventListener('click', innerListener);
// outer.addEventListener('click', outerListener);
// function innerListener(event) {
//     console.log(event.bubbles);
//     event.stopPropagation();
//     console.log('Clicked inner!');
// };
// function outerListener(event) {
//     console.log('Clicked outer!');
// }



    //Event Object Properties
// var inner = document.querySelector('#inner');
// var outer = document.querySelector('#outer');
// inner.addEventListener('click', innerListener);
// outer.addEventListener('click', outerListener);
// function innerListener(event) {
//     console.log(event.target);
//     event.target.style.backgroundColor = 'red';
//     event.stopPropagation();
//     console.log('Clicked inner!');
// };
// function outerListener(event) {
//     console.log(event.target);
//     event.target.style.backgroundColor = 'blue';
//     console.log('Clicked outer!');
// }

// var inner = document.querySelector('#inner');
// var outer = document.querySelector('#outer');
// inner.addEventListener('click', innerListener);
// outer.addEventListener('click', outerListener);
// function innerListener(event) {
//     console.log(event.clientX, event.clientY);
//     event.stopPropagation();
//     console.log('Clicked inner!');
// };
// function outerListener(event) {
//     console.log('Clicked outer!');
// }