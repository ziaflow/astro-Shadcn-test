import { useEffect, useRef, useState } from "react";

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Flipper {
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
  targetAngle: number;
  isPressed: boolean;
}

const PinballGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const ball = useRef<Ball>({
    x: 400,
    y: 300,
    vx: 0,
    vy: 0,
    radius: 8,
  });

  const leftFlipper = useRef<Flipper>({
    x: 300,
    y: 500,
    width: 80,
    height: 15,
    angle: -0.3,
    targetAngle: -0.3,
    isPressed: false,
  });

  const rightFlipper = useRef<Flipper>({
    x: 500,
    y: 500,
    width: 80,
    height: 15,
    angle: 0.3,
    targetAngle: 0.3,
    isPressed: false,
  });

  const bumpers = useRef([
    { x: 200, y: 200, radius: 30, hit: false },
    { x: 600, y: 200, radius: 30, hit: false },
    { x: 400, y: 150, radius: 30, hit: false },
  ]);

  const walls = useRef([
    { x: 0, y: 0, width: 800, height: 20 }, // top
    { x: 0, y: 580, width: 800, height: 20 }, // bottom
    { x: 0, y: 0, width: 20, height: 600 }, // left
    { x: 780, y: 0, width: 20, height: 600 }, // right
  ]);

  const animationRef = useRef<number>();

  const resetBall = () => {
    ball.current.x = 400;
    ball.current.y = 300;
    ball.current.vx = (Math.random() - 0.5) * 4;
    ball.current.vy = -2;
  };

  const updateGame = () => {
    if (gameOver || !gameStarted) return;

    // Update ball physics
    ball.current.vy += 0.2; // gravity
    ball.current.x += ball.current.vx;
    ball.current.y += ball.current.vy;

    // Ball friction
    ball.current.vx *= 0.995;

    // Update flippers
    if (leftFlipper.current.isPressed) {
      leftFlipper.current.targetAngle = 0.3;
    } else {
      leftFlipper.current.targetAngle = -0.3;
    }

    if (rightFlipper.current.isPressed) {
      rightFlipper.current.targetAngle = -0.3;
    } else {
      rightFlipper.current.targetAngle = 0.3;
    }

    leftFlipper.current.angle +=
      (leftFlipper.current.targetAngle - leftFlipper.current.angle) * 0.2;
    rightFlipper.current.angle +=
      (rightFlipper.current.targetAngle - rightFlipper.current.angle) * 0.2;

    // Check wall collisions
    walls.current.forEach((wall) => {
      if (
        ball.current.x - ball.current.radius < wall.x + wall.width &&
        ball.current.x + ball.current.radius > wall.x &&
        ball.current.y - ball.current.radius < wall.y + wall.height &&
        ball.current.y + ball.current.radius > wall.y
      ) {
        if (wall.x === 0 || wall.x === 780) {
          // side walls
          ball.current.vx *= -0.8;
          ball.current.x =
            wall.x === 0 ? ball.current.radius : 780 - ball.current.radius;
        } else if (wall.y === 0) {
          // top wall
          ball.current.vy *= -0.8;
          ball.current.y = ball.current.radius;
        } else if (wall.y === 580) {
          // bottom wall - lose life
          setLives((prev) => {
            if (prev <= 1) {
              setGameOver(true);
              return 0;
            }
            resetBall();
            return prev - 1;
          });
        }
      }
    });

    // Check bumper collisions
    bumpers.current.forEach((bumper) => {
      const dx = ball.current.x - bumper.x;
      const dy = ball.current.y - bumper.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < ball.current.radius + bumper.radius) {
        if (!bumper.hit) {
          setScore((prev) => prev + 100);
          bumper.hit = true;
          setTimeout(() => {
            bumper.hit = false;
          }, 1000);
        }

        // Bounce ball away from bumper
        const angle = Math.atan2(dy, dx);
        ball.current.vx = Math.cos(angle) * 8;
        ball.current.vy = Math.sin(angle) * 8;
      }
    });

    // Check flipper collisions
    [leftFlipper.current, rightFlipper.current].forEach((flipper) => {
      const dx = ball.current.x - flipper.x;
      const dy = ball.current.y - flipper.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < ball.current.radius + flipper.width / 2) {
        if (flipper.isPressed) {
          ball.current.vy = -8;
          ball.current.vx += (Math.random() - 0.5) * 4;
          setScore((prev) => prev + 10);
        }
      }
    });

    animationRef.current = requestAnimationFrame(updateGame);
  };

  const drawGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(0, 0, 800, 600);

    // Draw walls
    ctx.fillStyle = "#333";
    walls.current.forEach((wall) => {
      ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });

    // Draw bumpers
    bumpers.current.forEach((bumper) => {
      ctx.beginPath();
      ctx.arc(bumper.x, bumper.y, bumper.radius, 0, Math.PI * 2);
      ctx.fillStyle = bumper.hit ? "#ff6b6b" : "#4ecdc4";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Draw flippers
    [leftFlipper.current, rightFlipper.current].forEach((flipper) => {
      ctx.save();
      ctx.translate(flipper.x, flipper.y);
      ctx.rotate(flipper.angle);
      ctx.fillStyle = flipper.isPressed ? "#ff6b6b" : "#4ecdc4";
      ctx.fillRect(0, -flipper.height / 2, flipper.width, flipper.height);
      ctx.restore();
    });

    // Draw ball
    ctx.beginPath();
    ctx.arc(
      ball.current.x,
      ball.current.y,
      ball.current.radius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "#ff6b6b";
    ctx.fill();

    // Draw UI
    ctx.fillStyle = "#fff";
    ctx.font = "24px Arial";
    ctx.fillText(`Score: ${score}`, 20, 30);
    ctx.fillText(`Lives: ${lives}`, 20, 60);

    if (gameOver) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.fillRect(0, 0, 800, 600);
      ctx.fillStyle = "#fff";
      ctx.font = "48px Arial";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", 400, 250);
      ctx.font = "24px Arial";
      ctx.fillText(`Final Score: ${score}`, 400, 300);
      ctx.fillText("Click to restart", 400, 350);
    } else if (!gameStarted) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.fillRect(0, 0, 800, 600);
      ctx.fillStyle = "#fff";
      ctx.font = "48px Arial";
      ctx.textAlign = "center";
      ctx.fillText("PINBALL", 400, 250);
      ctx.font = "24px Arial";
      ctx.fillText("Click to start", 400, 300);
      ctx.fillText("Use A/D or Left/Right arrows for flippers", 400, 350);
    }
  };

  const gameLoop = () => {
    updateGame();
    drawGame();
    if (!gameOver && gameStarted) {
      requestAnimationFrame(gameLoop);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft") {
        leftFlipper.current.isPressed = true;
      }
      if (e.key === "d" || e.key === "D" || e.key === "ArrowRight") {
        rightFlipper.current.isPressed = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft") {
        leftFlipper.current.isPressed = false;
      }
      if (e.key === "d" || e.key === "D" || e.key === "ArrowRight") {
        rightFlipper.current.isPressed = false;
      }
    };

    const handleClick = () => {
      if (gameOver) {
        setGameOver(false);
        setScore(0);
        setLives(3);
        resetBall();
        setGameStarted(true);
      } else if (!gameStarted) {
        setGameStarted(true);
        resetBall();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("click", handleClick);

    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("click", handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameOver, gameStarted]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Pinball Game</h1>
        <p className="text-muted-foreground">
          Use A/D or Left/Right arrow keys to control the flippers
        </p>
      </div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="border border-border rounded-lg shadow-lg"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="mt-8">
        <a
          href="/"
          className="text-muted-foreground hover:text-foreground transition-colors underline"
        >
          ← Back to home
        </a>
      </div>
    </div>
  );
};

export default PinballGame;
