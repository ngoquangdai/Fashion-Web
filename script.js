const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

const mainImg = document.getElementById('MainImg')
const smallImg = document.getElementsByClassName('small-img')

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

Array.from(smallImg).forEach((img)=>{
    img.addEventListener('click',function(){
        document.getElementById('MainImg').src = img.src;
    })
})