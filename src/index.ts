import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  const response = {
    message: "Hello World!",
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    platform: process.platform,
    architecture: process.arch,
    environment: process.env.NODE_ENV || "development",
  }

  res.json(response)
})

// Health check endpoint for ECS
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: "typescript-hello-world",
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 TypeScript Hello World server running on port ${PORT}`)
  console.log(`📍 Health check: http://localhost:${PORT}/health`)
})

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully")
  process.exit(0)
})

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully")
  process.exit(0)
})
