
window.addEventListener('scroll', function (){
    if (scrollY > 30){
        const top = document.getElementById("Top")
        top.style.top = 0;
        top.style.textUnderlineOffset = "1px";
        
    }
    else{
         const top = document.getElementById("Top").style.top = "60px";
    }
})