const next = require('next')
const http = require('http')

const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  http.createServer((req, res) => {
    handle(req, res)
  }).listen(process.env.PORT, () => {
    console.log("Server running")
  })
})