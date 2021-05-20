var burgerBar = document.querySelector('.burger-bar');
var listName = document.querySelector('.list-name-android');
var nav = document.querySelector('nav');

var buka = false;
burgerBar.addEventListener('click', function(){
    buka = !buka;
    if(buka){
        nav.style.backgroundColor = "#f6f6f6"
        nav.style.color = "#414141"
        listName.style.display = "block";
    }else{
        nav.style.backgroundColor = "transparent"
        nav.style.color = "white"
        listName.style.display = "none";
    }
});

document.addEventListener("scroll", function(){
    if(window.scrollY > 204){
        nav.style.backgroundColor = "#f6f6f6"
        nav.style.color = "#414141"
    }else{
        nav.style.backgroundColor = "transparent"
        nav.style.color = "white"
    }
})

