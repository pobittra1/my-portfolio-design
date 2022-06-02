// scrolling top functionality start
window.addEventListener("scroll" , function(){
    var header1 = document.querySelector(".fpage header");
    // header1.classList.toggle("scrolled" , window.scrollY > 300);
    if(window.scrollY < 300){
        header1.classList.remove("scrolled");
    }
    else{
        header1.classList.add("scrolled");
    }

});
// scrolling top functionality end

// bar functionality
document.querySelector('.bar').addEventListener("click" , function(){
    document.querySelector('.fpage header ul').classList.toggle('active');

});
// bar functionality



// document.getElementById("liul").classList.add("lijs");

// if(window.scrollY > 600){
//     document.getElementById('#liul').classList.add("lijs");
// }



// typed us
var typed = new Typed('#typed', {
    strings: ['beginner front-end developer', 'also developing with js', 'ready for hire'],
    typeSpeed : 50,
    backSpeed : 50,
    loop : true

  });

// typed us








