let links = document.querySelector('.header .links');
let iconBars = document.querySelector('.header .fa-bars');

iconBars.onclick = function() {
    if (this.classList.contains('fa-bars')){
        this.style.cursor = 'pointer'
        this.classList.replace('fa-bars', 'fa-xmark');
    }else{
        this.classList.replace('fa-xmark', 'fa-bars');
    }
    links.classList.toggle('open');
}
