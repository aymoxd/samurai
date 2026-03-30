const boxes =  document.querySelectorAll('.box');

window.addEventListener("scroll",() => {

   const triggerBottom = window.innerHeight / 5 * 4;
   boxes.forEach(box => {
    const boxtop = box.getBoundingClientRect().top;

    if(boxtop < triggerBottom){
        box.classList.add('opacity-100');
    }else{
        box.classList.remove('opacity-100');
    }

   });

});
