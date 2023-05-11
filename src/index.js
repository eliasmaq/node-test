import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Welcome to gagoon</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>Acerca d</h1>")
})


app.listen(3000)
console.log("server on port", 3000)