'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

interface Target {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX?: number;
  speedY?: number;
}

interface Stats {
  hits: number;
  misses: number;
  accuracy: number;
  avgReactionTime: number;
}

function GameContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mode = searchParams.get('mode') || 'precision';

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [targets, setTargets] = useState<Target[]>([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [stats, setStats] = useState<Stats>({
    hits: 0,
    misses: 0,
    accuracy: 0,
    avgReactionTime: 0,
  });
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [targetSpawnTime, setTargetSpawnTime] = useState(Date.now());

  // Game configuration based on mode
  const getGameConfig = () => {
    switch (mode) {
      case 'speed':
        return {
          duration: 30,
          targetCount: 1,
          targetSize: 40,
          spawnInterval: 800,
          moving: false,
        };
      case 'tracking':
        return {
          duration: 45,
          targetCount: 3,
          targetSize: 50,
          spawnInterval: 2000,
          moving: true,
        };
      case 'precision':
      default:
        return {
          duration: 60,
          targetCount: 5,
          targetSize: 60,
          spawnInterval: 1500,
          moving: false,
        };
    }
  };

  const config = getGameConfig();

  // Generate random position for target
  const generateRandomPosition = (size: number) => {
    const maxX = window.innerWidth - size - 40;
    const maxY = window.innerHeight - size - 200;
    return {
      x: Math.random() * maxX + 20,
      y: Math.random() * maxY + 100,
    };
  };

  // Spawn new target
  const spawnTarget = useCallback(() => {
    const { x, y } = generateRandomPosition(config.targetSize);
    const newTarget: Target = {
      id: Date.now(),
      x,
      y,
      size: config.targetSize,
      ...(config.moving && {
        speedX: (Math.random() - 0.5) * 3,
        speedY: (Math.random() - 0.5) * 3,
      }),
    };

    setTargets((prev) => {
      const newTargets = [...prev, newTarget];
      return newTargets.slice(-config.targetCount);
    });
    setTargetSpawnTime(Date.now());
  }, [config.targetSize, config.targetCount, config.moving]);

  // Handle target click
  const handleTargetClick = (targetId: number) => {
    const reactionTime = Date.now() - targetSpawnTime;
    setReactionTimes((prev) => [...prev, reactionTime]);
    
    setTargets((prev) => prev.filter((t) => t.id !== targetId));
    setScore((prev) => prev + 10);
    setStats((prev) => ({
      ...prev,
      hits: prev.hits + 1,
    }));
    
    // Spawn new target immediately
    setTimeout(spawnTarget, 100);
  };

  // Handle miss (clicking on background)
  const handleMissClick = () => {
    setStats((prev) => ({
      ...prev,
      misses: prev.misses + 1,
    }));
  };

  // Start game
  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTargets([]);
    setTimeLeft(config.duration);
    setStats({ hits: 0, misses: 0, accuracy: 0, avgReactionTime: 0 });
    setReactionTimes([]);
    
    // Spawn initial targets
    for (let i = 0; i < config.targetCount; i++) {
      setTimeout(() => spawnTarget(), i * 200);
    }
  };

  // Timer countdown
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameOver(true);
          setGameStarted(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, gameOver]);

  // Auto-spawn targets
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      if (targets.length < config.targetCount) {
        spawnTarget();
      }
    }, config.spawnInterval);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver, targets.length, config.targetCount, config.spawnInterval, spawnTarget]);

  // Move targets (tracking mode)
  useEffect(() => {
    if (!gameStarted || !config.moving) return;

    let animationFrameId: number;
    
    const animate = () => {
      setTargets((prev) =>
        prev.map((target) => {
          let newX = target.x + (target.speedX || 0);
          let newY = target.y + (target.speedY || 0);
          let newSpeedX = target.speedX || 0;
          let newSpeedY = target.speedY || 0;

          // Bounce off walls
          if (newX <= 0 || newX >= window.innerWidth - target.size) {
            newSpeedX *= -1;
            newX = Math.max(0, Math.min(window.innerWidth - target.size, newX));
          }
          if (newY <= 80 || newY >= window.innerHeight - target.size - 100) {
            newSpeedY *= -1;
            newY = Math.max(80, Math.min(window.innerHeight - target.size - 100, newY));
          }

          return {
            ...target,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
          };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [gameStarted, config.moving]);

  // Calculate final stats
  useEffect(() => {
    if (gameOver) {
      const totalShots = stats.hits + stats.misses;
      const accuracy = totalShots > 0 ? (stats.hits / totalShots) * 100 : 0;
      const avgReactionTime = reactionTimes.length > 0
        ? reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length
        : 0;

      setStats((prev) => ({
        ...prev,
        accuracy,
        avgReactionTime,
      }));
    }
  }, [gameOver, stats.hits, stats.misses, reactionTimes]);

  const getModeTitle = () => {
    switch (mode) {
      case 'speed': return 'Speed Mode';
      case 'tracking': return 'Tracking Mode';
      case 'precision': return 'Precision Mode';
      default: return 'Aim Trainer';
    }
  };

  const getModeColor = () => {
    switch (mode) {
      case 'speed': return 'from-purple-600 to-purple-800';
      case 'tracking': return 'from-pink-600 to-pink-800';
      case 'precision': return 'from-blue-600 to-blue-800';
      default: return 'from-blue-600 to-blue-800';
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
      onClick={gameStarted ? handleMissClick : undefined}
    >
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm p-4 flex justify-between items-center">
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        >
          ← Back to Menu
        </button>
        <h1 className="text-2xl font-bold">{getModeTitle()}</h1>
        <div className="flex gap-6 text-lg">
          <div>Score: <span className="font-bold text-yellow-400">{score}</span></div>
          <div>Time: <span className="font-bold text-blue-400">{timeLeft}s</span></div>
        </div>
      </div>

      {/* Game Area */}
      <div className="relative w-full h-[calc(100vh-80px)]">
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center bg-black/70 backdrop-blur-sm p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6">{getModeTitle()}</h2>
              <p className="text-xl text-gray-300 mb-8">
                {mode === 'speed' && 'Click targets as fast as you can!'}
                {mode === 'tracking' && 'Click the moving targets!'}
                {mode === 'precision' && 'Click all targets accurately!'}
              </p>
              <button
                onClick={startGame}
                className={`px-8 py-4 text-xl font-bold bg-gradient-to-r ${getModeColor()} rounded-lg hover:scale-110 transition-transform shadow-2xl`}
              >
                Start Game
              </button>
            </div>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center bg-black/90 backdrop-blur-sm p-12 rounded-2xl max-w-2xl">
              <h2 className="text-5xl font-bold mb-6 text-yellow-400">Game Over!</h2>
              <div className="mb-8">
                <div className="text-6xl font-bold text-green-400 mb-2">{score}</div>
                <div className="text-gray-400">Final Score</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">{stats.hits}</div>
                  <div className="text-sm text-gray-400">Hits</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-400">{stats.misses}</div>
                  <div className="text-sm text-gray-400">Misses</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-400">
                    {stats.accuracy.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">
                    {stats.avgReactionTime.toFixed(0)}ms
                  </div>
                  <div className="text-sm text-gray-400">Avg Reaction</div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={startGame}
                  className={`px-6 py-3 font-bold bg-gradient-to-r ${getModeColor()} rounded-lg hover:scale-105 transition-transform`}
                >
                  Play Again
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="px-6 py-3 font-bold bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  Back to Menu
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Targets */}
        {gameStarted && targets.map((target) => (
          <div
            key={target.id}
            onClick={(e) => {
              e.stopPropagation();
              handleTargetClick(target.id);
            }}
            className="absolute cursor-crosshair"
            style={{
              left: `${target.x}px`,
              top: `${target.y}px`,
              width: `${target.size}px`,
              height: `${target.size}px`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-4 border-white/50 animate-pulse">
              <div className="w-1/3 h-1/3 bg-white rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GamePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    }>
      <GameContent />
    </Suspense>
  );
}
