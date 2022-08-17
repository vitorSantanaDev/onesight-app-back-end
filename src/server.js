const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const app = require('./app')

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_ACCESS_PASSWORD
)

mongoose.connect(DB).then(() => {
  console.debug('DB connection successfuly 🚀')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.info(`App running on port ${port} 🔥`)
})
