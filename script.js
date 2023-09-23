document.getElementById('bar').addEventListener('click',function(){
    document.getElementById('nav-item').classList.add('activate');
});

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('nav-item').classList.remove('activate');
});

const mainimage = document.getElementById('mainimg');
const smallimage = document.getElementsByClassName('small-img');

smallimage[0].addEventListener('click',function(){
    mainimage.src = smallimage[0].src
});

smallimage[1].addEventListener('click',function(){
    mainimage.src = smallimage[1].src;
});

smallimage[2].addEventListener('click',function(){
    mainimage.src = smallimage[2].src;
});

smallimage[3].addEventListener('click',function(){
    mainimage.src = smallimage[3].src;
});



