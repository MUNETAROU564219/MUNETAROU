const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

canvas.width = 800;
canvas.height = 600;

const circle = {
  x:400,
  y:300,
  radius: 50,
  color: 'blue',
  dx: 2,
  dy: 2
};

function update() {

ctx.clearRext(0,0,canvas.width, canvas.height);

drawCircle();

circle.x +=circle.dx;
circle.y +=circle.dy;

if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
  circle.dx *= -1;
}
if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
  circle.dy *= -1;
}

rewuestAnimationFrame(update);
}

update();
