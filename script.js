    //Event Handlers
// window.onload = function() {
//     console.log('Window loaded!');
// };

// var btn = document.querySelector('button');
// btn.onclick = function() {
//     console.log('Clicked');
// };
// btn.onclick = function() {
//     console.log('Clicked');
// };

// var btn = document.querySelector('button');
// btn.onclick = function() {
//     console.log('Clicked');
// };
// btn.onmouseover = function() {
//     console.log('Clicked');
// };

// var btn = document.querySelector('button');
// btn.onclick = function() {
//     console.log('Button clicked');
// };
// btn.onmouseover = function() {
//     console.log('Button entered');
// };
// btn.onmouseleave = function() {
//     console.log('Button lived');
// };

// var btn = document.querySelector('button');
// document.onclick = function() {
//     console.log('Button clicked');
// };

// var btn = document.querySelector('button');
// btn.onclick = function() {
//     console.log('Button clicked');
// };
// btn.onclick = function() {
//     console.log('Also clicked');
// };
// //Second btn.onclick method overwrite first method - and that is a problem because often times we will need multiple listeners and we don't want only one handler!

var btn = document.querySelector('button');
btn.onclick = function() {
    console.log('Button clicked');
};
btn.onclick = function() {
    console.log('Also clicked');
};