export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white p-8 rounded-lg bg-white/10 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-4">🚀 TypeScript Hello World</h1>
        <p className="text-lg mb-4">This is running on Next.js for v0 compatibility</p>
        <p className="text-sm opacity-80">For the pure Node.js TypeScript server, check the src/index.ts file</p>
        <div className="mt-6 space-y-2 text-sm">
          <div>Node Version: {process.version}</div>
          <div>Environment: {process.env.NODE_ENV || "development"}</div>
        </div>
      </div>
    </div>
  )
}
