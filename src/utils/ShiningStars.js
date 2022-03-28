export default function ShiningStars() {
    window.addEventListener("resize", function () {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        context.restore();

        animate()
    });
    var screenH;
    var screenW;
    var stars = [];
    var fps = 30;
    var numStars = 500;
    // Calculate the screen size
    screenH = window.innerHeight;
    screenW = window.innerWidth;

    // Get the canvas
    const canvas = document.getElementById('canvas4');

    // Fill out the canvas
    canvas.height = screenH
    canvas.width = screenW
    const context = canvas.getContext('2d');

    // Create all the stars
    for (var z = 0; z < numStars; z++) {
        var x = Math.round(Math.random() * screenW);
        var y = Math.round(Math.random() * screenH);
        var length = 1 + Math.random() * 1.5;
        var opacity = Math.random();

        // Create a new star and draw
        var star = new Star(x, y, length, opacity);

        // Add the the stars array
        stars.push(star);
    }

    // let animateInterval = setInterval(animate, 1000 / fps);

    /**
     * Animate the canvas
     */
    function animate() {
        context.clearRect(0, 0, screenW, screenH);

        stars.forEach((e) => {
            e.draw(context);
        })
    }

    /* stop Animation */
    // function stopAnimation() {
    //     clearInterval(animateInterval);
    // }

    //stopAnimation();

    function Star(x, y, length, opacity) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.length = parseInt(length);
        this.opacity = opacity;
        this.factor = 1;
        this.increment = Math.random() * .03;
    }

    Star.prototype.draw = function () {
        context.rotate((Math.PI * 1 / 10));

        // Save the context
        context.save();

        // move into the middle of the canvas, just to make room
        context.translate(this.x, this.y);

        // Change the opacity
        if (this.opacity > 1) {
            this.factor = -1;
        }
        else if (this.opacity <= 0) {
            this.factor = 1;

            this.x = Math.round(Math.random() * screenW);
            this.y = Math.round(Math.random() * screenH);
        }

        this.opacity += this.increment * this.factor;

        context.beginPath()
        for (var i = 5; i--;) {
            context.lineTo(0, this.length);
            context.translate(0, this.length);
            context.rotate((Math.PI * 2 / 10));
            context.lineTo(0, - this.length);
            context.translate(0, - this.length);
            context.rotate(-(Math.PI * 6 / 10));
        }
        context.lineTo(0, this.length);
        context.closePath();
        context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
        context.shadowBlur = 5;
        context.shadowColor = '#fff';
        context.fill();

        context.restore();
    }
    return setInterval(animate, 1000 / fps);
}