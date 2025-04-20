
for(var i =0;i<=6;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        var drums = this.innerHTML;
        switch(drums)
            {
                case "w":
                    var audioW = new Audio('sounds/tom-1.mp3');
                    audioW.play();
                    break;
                case "a":
                    var audioV = new Audio('sounds/tom-2.mp3');
                    audioV.play();
                    break;
                case "s":
                    var audioS = new Audio('sounds/tom-3.mp3');
                    audioS.play();
                    break;

                case "d":
                        var audioD = new Audio('sounds/tom-4.mp3');
                        audioD.play();
                        break;

                case "j":
                    var audioJ = new Audio('sounds/snare.mp3');
                    audioJ.play();
                    break;

                case "k":
                    var audioK = new Audio('sounds/crash.mp3');
                    audioK.play();
                    break;

                case "l":
                    var audioL = new Audio('sounds/kick-bass.mp3');
                    audioL.play();
                    break;
            }
    });

   
}

function makeSound(key){
    switch(key)
        {
                case "w":
                    var audioW = new Audio('sounds/tom-1.mp3');
                    audioW.play();
                    break;
                case "a":
                    var audioV = new Audio('sounds/tom-2.mp3');
                    audioV.play();
                    break;
                case "s":
                    var audioS = new Audio('sounds/tom-3.mp3');
                    audioS.play();
                    break;

                case "d":
                        var audioD = new Audio('sounds/tom-4.mp3');
                        audioD.play();
                        break;

                case "j":
                    var audioJ = new Audio('sounds/snare.mp3');
                    audioJ.play();
                    break;

                case "k":
                    var audioK = new Audio('sounds/crash.mp3');
                    audioK.play();
                    break;

                case "l":
                    var audioL = new Audio('sounds/kick-bass.mp3');
                    audioL.play();
                    break;
        }
}

document.addEventListener("keydown",function(event){

    makeSound(event.key.toLowerCase());
    
});

