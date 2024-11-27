const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

// script.jsの最初にdrawCircle関数を定義
function drawCircle(ctx, x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);  // 円を描く
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();  // パスを閉じる
}

// update関数の中でdrawCircleを呼び出す
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // 画面をクリア
    drawCircle(ctx, 100, 100, 50, 'blue');  // 円を描画
}


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

ctx.clearRect(0,0,canvas.width, canvas.height);

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

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') circle.y -= 10;
  if (event.key === 'ArrowDown') circle.y += 10;
  if (event.key === 'ArrowLeft') circle.x -= 10;
  if (event.key === 'ArrowRight') circle.x += 10;
});

update();
