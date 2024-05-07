let non =  document.querySelector("#btn-non");
console.log(non);



// non.addEventListener('mouseover', function(){

//     function randomizer(element){

//         let x = Math.random() * 300;
//         let y = Math.random() * 300;
    
//         element.style.top = x + "px";
//         element.style.left = y + "px";
        
//         console.log(randomizer);
    
//     }
//     randomizer(this)


// })


non.addEventListener('mouseover', ()=>{

    let x = Math.random() * 600;
    let y = Math.random() * 600;

    non.style.top = x + "px";
    non.style.left = y + "px";
        
})