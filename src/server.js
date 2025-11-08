import app from './app.js'
import { connectDb } from './db/connect.js'

async function init() {
  try {
    await connectDb()
    app.listen(app.get('port'), () => {
      console.log(`Server running on port http://localhost:${app.get('port')}`)
    })
  } catch (error) {
    console.error('failed to start server:', error)
    process.exit(1)
  }
}

init()
