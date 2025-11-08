window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('drawArea');
    var ctx = canvas.getContext('2d');

    var isDrawing = false;
    var lastX = 0;
    var lastY = 0;

    ctx.strokeStyle = '#0b6ebf';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    function getPos(evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    canvas.addEventListener('mousedown', function (evt) {
        isDrawing = true;
        var p = getPos(evt);
        lastX = p.x;
        lastY = p.y;
    });

    canvas.addEventListener('mousemove', function (evt) {
        if (!isDrawing) return;
        var p = getPos(evt);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        lastX = p.x;
        lastY = p.y;
    });

    function stop() {
        isDrawing = false;
    }

    canvas.addEventListener('mouseup', stop);
    canvas.addEventListener('mouseleave', stop);
});
