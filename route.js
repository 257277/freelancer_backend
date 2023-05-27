const jsonServer = require('json-server')
let db = require("./db.json");
const server = jsonServer.create()



server.listen(3000, function () {
    console.log('JSON Server is running')
})