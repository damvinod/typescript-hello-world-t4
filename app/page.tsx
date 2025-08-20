export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello World! 👋</h1>

          <p className="text-lg text-gray-600 mb-6">TypeScript Hello World - ECS Ready</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">System Info</h2>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Runtime: Next.js with TypeScript</p>
              <p>Environment: {process.env.NODE_ENV || "development"}</p>
              <p>Port: {process.env.PORT || "3000"}</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="/api/health"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Health Check
            </a>
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">ECS Ready ✅</div>
          </div>
        </div>
      </div>
    </div>
  )
}
