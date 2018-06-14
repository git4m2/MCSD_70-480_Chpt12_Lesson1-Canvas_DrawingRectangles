$(document).ready(function () {
    drawSomething();
});

function drawSomething() {
    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d')
        , offset = 15
        , clearOffset = 30
        , pushDownOffset = 10
        , height = 50
        , width = 100
        , count = 4
        , i = 0;
    for (i = 0; i < count; i++) {
        ctx.fillRect(i * (offset + width) + offset, offset, width, height);
        ctx.clearRect(i * (offset + width) + (clearOffset / 2) + offset, offset + (clearOffset / 2) + pushDownOffset, width - clearOffset, height - clearOffset);
        ctx.strokeRect(i * (offset + width) + offset, (2 * offset) + height, width, height);
    }
}
