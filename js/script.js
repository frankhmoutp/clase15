document.getElementById('menu-toggle').addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('active');
})

document.getElementById('openModal').addEventListener('click', function(){
    document.getElementById('modal').style.display='block';
})

document.getElementById('closeModal').addEventListener('click', function(){
    document.getElementById('modal').style.display='none';
})

window.addEventListener('click', function(event){
if(event.target == this.document.getElementById('modal'))
    this.document.getElementById('modal').style.display='none';
})

