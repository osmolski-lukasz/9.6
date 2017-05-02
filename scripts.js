var list = document.getElementById ('list');
var add = document.getElementById ('addElem');
var number = document.getElementsByTagName ('li');

console.log(number.length);

add.addEventListener('click', function() {
    list.innerHTML += '<li>item</li>';
});