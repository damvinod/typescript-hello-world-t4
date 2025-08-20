import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Routes
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TypeScript Hello World</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin: 0;
                padding: 40px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .container {
                text-align: center;
                background: rgba(255, 255, 255, 0.1);
                padding: 40px;
                border-radius: 20px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            }
            h1 { font-size: 3rem; margin-bottom: 20px; }
            .info { margin: 10px 0; opacity: 0.9; }
            .health-link {
                display: inline-block;
                margin-top: 20px;
                padding: 10px 20px;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                text-decoration: none;
                border-radius: 10px;
                transition: background 0.3s;
            }
            .health-link:hover { background: rgba(255, 255, 255, 0.3); }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Hello World!</h1>
            <div class="info">Timestamp: ${new Date().toISOString()}</div>
            <div class="info">Environment: ${process.env.NODE_ENV || "development"}</div>
            <div class="info">Node Version: ${process.version}</div>
            <div class="info">Platform: ${process.platform}</div>
            <div class="info">Architecture: ${process.arch}</div>
            <a href="/health" class="health-link">Health Check</a>
        </div>
    </body>
    </html>
  `)
})

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    nodeVersion: process.version,
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
