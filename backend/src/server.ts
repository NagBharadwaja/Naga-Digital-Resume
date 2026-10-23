import express from 'express'
import { resumeRouter } from './resume/resume.router.js'

const app = express()
const port = Number(process.env.PORT) || 3000

app.get('/api/health', (_request, response) => {
  response.json({ message: 'Express backend connected' })
})

app.use('/api/resume', resumeRouter);

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`)
})
