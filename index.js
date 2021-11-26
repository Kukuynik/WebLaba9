var allDrums = document.querySelectorAll('.drum').length;
for (var i=0;i<allDrums;i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})
function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            console.log('w')
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            console.log('a')
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            console.log('s')
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            console.log('d')
            break;
        case "j":
            var snare = new Audio('sounds/crash.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/kick-bass.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/snare.mp3');
            kick.play();
            break;
        default:
            console.log(key);
    }
}
