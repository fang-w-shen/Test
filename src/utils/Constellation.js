export default function Constellation() {
    window.addEventListener("resize", function () {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    });
    const requestAnimFrame = function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    }();

    const canvas = document.getElementById('canvas2');

    const context = canvas.getContext('2d');

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    let particle_count = 10;
    let particles = [];
    let couleurs = ["white", "#fefffd", "#e74c3c", '#5e5ad8', '#2b91bf'];

    class Particle {
        constructor() {
            this.radius = Math.round((Math.random() * 2) + 2);
            this.x = Math.floor((Math.random() * canvas.width));
            this.y = Math.floor((Math.random() * canvas.height));
            this.color = couleurs[Math.round(Math.random() * couleurs.length)];
            this.speedx = Math.round((Math.random() * 101) + 0) / 300;
            this.speedy = Math.round((Math.random() * 101) + 0) / 300;

            switch (Math.round(Math.random() * couleurs.length)) {
                case 1:
                    this.speedx *= 1;
                    this.speedy *= 1;
                    break;
                case 2:
                    this.speedx *= -1;
                    this.speedy *= 1;
                    break;
                case 3:
                    this.speedx *= 1;
                    this.speedy *= -1;
                    break;
                case 4:
                    this.speedx *= -1;
                    this.speedy *= -1;
                    break;
            }


        }
        move() {

            context.beginPath();
            context.globalCompositeOperation = 'source-over';
            context.fillStyle = this.color;
            context.globalAlpha = 1;
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            context.fill();
            context.closePath();

            this.x = this.x + this.speedx;
            this.y = this.y + this.speedy;

            if (this.x <= 0 + this.radius) {
                this.speedx *= -1;
            }
            if (this.x >= canvas.width - this.radius) {
                this.speedx *= -1;
            }
            if (this.y <= 0 + this.radius) {
                this.speedy *= -1;
            }
            if (this.y >= canvas.height - this.radius) {
                this.speedy *= -1;
            }

            for (var j = 0; j < particle_count; j++) {
                var particleActuelle = particles[j], yd = particleActuelle.y - this.y, xd = particleActuelle.x - this.x, d = Math.sqrt(xd * xd + yd * yd);

                if (d < 200) {
                    context.beginPath();
                    context.globalAlpha = (200 - d) / (200 - 0);
                    context.globalCompositeOperation = 'destination-over';
                    context.lineWidth = 1;
                    context.moveTo(this.x, this.y);
                    context.lineTo(particleActuelle.x, particleActuelle.y);
                    context.strokeStyle = 'white';
                    context.lineCap = "round";
                    context.stroke();
                    context.closePath();
                }
            }
        }
    }
    for (var i = 0; i < particle_count; i++) {
        var particle = new Particle()
        particles.push(particle);
    }


    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particle_count; i++) {
            particles[i].move();
        }
        requestAnimFrame(animate);
    }




    return animate()
}