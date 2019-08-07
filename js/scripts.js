/* ==============================
Burger Animation
============================== */
var $topLine = $('#burger-container div:nth-child(1)');
var $middleLine = $('#burger-container div:nth-child(2)');
var $bottomLine = $('#burger-container div:nth-child(3)');
var $burgerContainer = $('#burger-container');
var animationSpeed = 0.25;
var ifClicked = false;

function burgerClick(){
    console.log("clicks");
    if(ifClicked === false){
        TweenMax.to($topLine,animationSpeed,{rotation:45, y:10});
        TweenMax.to($middleLine,animationSpeed,{alpha:0, scaleX:0});
        TweenMax.to($bottomLine,animationSpeed,{rotation:-45, y:-10});
        ifClicked = true;
    }else{
        TweenMax.to($topLine,animationSpeed,{rotation:0, y:0});
        TweenMax.to($middleLine,animationSpeed,{alpha:1, scaleX:1});
        TweenMax.to($bottomLine,animationSpeed,{rotation:0, y:0});
        ifClicked = false;
    }
}

$burgerContainer.on("click", burgerClick);
/* ==============================
Burger Animation End
============================== */
