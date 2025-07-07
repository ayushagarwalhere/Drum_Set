// const drums = document.querySelectorAll('.drum');

// drums.forEach(drum => {
//     drum.addEventListener('click', function() {
//         this.style.color = 'black';
//         let img = window.getComputedStyle(this).backgroundImage;
//         let audio = new Audio(img.replace('url("', '').replace('")', '').replace('.png', '.mp3').replace('images','sounds'));
//         audio.play();
//     });
// }); // playing sounds using touchpad

// document.addEventListener('keydown', function(event) {
//     let key = event.key.toLowerCase();
//     switch(key){
//         case 'w':
//             let tom1 = new Audio('sounds/tom1.mp3');
//             tom1.play();
//             break;

//         case 'a':
//             let tom2 = new Audio('sounds/tom2.mp3');
//             tom2.play();
//             break;

//         case 's':
//             let tom3 = new Audio('sounds/tom3.mp3');
//             tom3.play();
//             break;  

//         case 'd':       
//             let tom4 = new Audio('sounds/tom4.mp3');
//             tom4.play();
//             break;

//         case 'j':
//             let snare = new Audio('sounds/snare.mp3');
//             snare.play();
//             break; 

//         case 'k':
//             let crash = new Audio('sounds/crash.mp3');
//             crash.play();
//             break;

//         case 'l':
//             let kick = new Audio('sounds/kick.mp3');
//             kick.play();
//             break;

//     }

// }); the above code is working perfectly but just adding some refinements



const drums = document.querySelectorAll('.drum');


drums.forEach(drum => {
    drum.addEventListener('click', () => {
        const key = drum.innerHTML;
        sound(key); 
    }); 
});

drums.forEach(drum => {
    drum.addEventListener('keydown', (event) => {
        const key = event.key;
        sound(key);
    });
});




function sound(key){
    switch(key){
        case 'w':
            new Audio('sounds/tom1.mp3').play();
            break;
        case 'a':
            new Audio('sounds/tom2.mp3').play();
            break;
        case 's':
            new Audio('sounds/tom3.mp3').play();
            break;
        case 'd':
            new Audio('sounds/tom4.mp3').play();
            break;
        case 'j':
            new Audio('sounds/snare.mp3').play();
            break;
        case 'k':
            new Audio('sounds/crash.mp3').play();
            break;
        case 'l':
            new Audio('sounds/kick.mp3').play();
            break;
    }
}

