export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              ⚾ MLB Chat
            </h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Chat
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Your Personal Baseball Agent
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get real-time scores, schedules, game updates, and the latest MLB news. 
            Discuss anything from the current season to baseball history with your AI-powered baseball companion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Live Scores
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get instant updates on games in progress and final scores
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Game Schedule
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Check upcoming games, series, and matchups for any team
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📰</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Latest News
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Stay updated with breaking news, trades, and team updates
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Baseball History
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore stats, records, and memorable moments from MLB history
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Ask Me Anything About Baseball
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Try asking about:
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Today&apos;s games and scores
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Team standings and playoff races
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Player statistics and performance
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Historical records and achievements
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Popular topics:
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  MVP and Cy Young races
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Trade deadline moves
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  World Series predictions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Rookie of the Year candidates
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Start Chatting with MLB Chat
          </button>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            No sign-up required • Free to use • Always up-to-date
          </p>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-900 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>MLB Chat - Your AI-powered baseball companion</p>
          <p className="mt-2 text-sm">
            Stay connected to America&apos;s pastime, anytime, anywhere
          </p>
        </div>
      </footer>
    </div>
  );
}
