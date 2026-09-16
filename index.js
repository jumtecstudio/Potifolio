const head_text = document.getElementById("head_text")
window.addEventListener('scroll', function (){
    if (scrollY > 30){
        const top = document.getElementById("Top")
        top.style.top = 0;
        top.style.textUnderlineOffset = "1px";
        head_text.style.color = 'white'
        
        
    }
    else{
         const top = document.getElementById("Top").style.top = "75px";
    }
})
const animation = document.getElementById('animation')

for(let a = 0; a <= 11; a++){
    x = animation.children[a]
    //x.style.height = `${ }px `
    //x.style.width = `${a * 20}px `
}
