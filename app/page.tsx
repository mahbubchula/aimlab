import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            AIM LAB
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Improve your aim and reaction time with our training exercises
          </p>
        </div>

        {/* Game Modes Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Precision Mode */}
          <Link href="/game?mode=precision">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 hover:scale-105 transition-transform cursor-pointer shadow-2xl">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold mb-4">Precision</h2>
              <p className="text-gray-200">
                Test your accuracy with stationary targets. Click as many targets as you can within the time limit.
              </p>
              <div className="mt-4 text-sm text-blue-200">
                ⏱️ 60 seconds • 🎯 Click targets
              </div>
            </div>
          </Link>

          {/* Speed Mode */}
          <Link href="/game?mode=speed">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-8 hover:scale-105 transition-transform cursor-pointer shadow-2xl">
              <div className="text-5xl mb-4">⚡</div>
              <h2 className="text-3xl font-bold mb-4">Speed</h2>
              <p className="text-gray-200">
                Click targets as fast as possible. Smaller targets appear faster to challenge your reaction time.
              </p>
              <div className="mt-4 text-sm text-purple-200">
                ⏱️ 30 seconds • ⚡ Fast targets
              </div>
            </div>
          </Link>

          {/* Tracking Mode */}
          <Link href="/game?mode=tracking">
            <div className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-lg p-8 hover:scale-105 transition-transform cursor-pointer shadow-2xl">
              <div className="text-5xl mb-4">🔄</div>
              <h2 className="text-3xl font-bold mb-4">Tracking</h2>
              <p className="text-gray-200">
                Follow moving targets and click them. Improve your tracking skills and dynamic aim.
              </p>
              <div className="mt-4 text-sm text-pink-200">
                ⏱️ 45 seconds • 🔄 Moving targets
              </div>
            </div>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="text-xl font-semibold mb-2">Track Progress</h4>
              <p className="text-gray-300 text-sm">
                Monitor your scores and see improvement over time
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">🎮</div>
              <h4 className="text-xl font-semibold mb-2">Multiple Modes</h4>
              <p className="text-gray-300 text-sm">
                Different training exercises for various skills
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="text-xl font-semibold mb-2">High Scores</h4>
              <p className="text-gray-300 text-sm">
                Beat your personal best and challenge yourself
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">How to Play</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Choose a game mode above</li>
              <li>Click the &quot;Start Game&quot; button when ready</li>
              <li>Click on the targets as they appear</li>
              <li>Try to get the highest score possible!</li>
              <li>Review your statistics after each round</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
