var colors = ["#E74C3C", "#F39C12", "#F1C40F", "#27AE60", "#3498DB", "#8E44AD"];
var currentColor = 1;

function changeColor() {
    $('body').css("background", colors[currentColor]);
    currentColor++;
    if (currentColor === colors.length) {
        currentColor = 0;
    }
}

$(function() {

    changeColor();
    setInterval(changeColor, 5000);

    particlesJS.load('background', 'js/particles-config.json');

});
