let icon = document.querySelector('.clicked');
let links = document.querySelector('header nav .links');

icon.onclick = function(){
    links.style.display = 'flex';
}