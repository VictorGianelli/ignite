const { request } = require("express");
const express = require("express");

const app = express();

app.get("/course", (request, response) => {
 return response.json(["Curso 1","Curso 2","Curso 3"])
})

app.post("/course", (request, response) => {
 return response.json(["Curso 1","Curso 2","Curso 3","Curso 4"])
})

app.put("/course/:id", (request, response) => {
 return response.json(["Curso 6","Curso 2","Curso 3","Curso 4"])
})

app.patch("/course/:id", (request, response) => {
 return response.json(["Curso 6","Curso 7","Curso 3","Curso 4"])
})

app.delete("/course/:id ", (request, response) => {
 return response.json(["Curso 6","Curso 2","Curso 4"])
})
 
app.listen(3333)