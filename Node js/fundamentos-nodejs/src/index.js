const express = require("express");
const { v4: uuidv4 } = require('uuid')

const app = express();

const customers = [];

app.use(express.json())

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (costumers) => costumers.cpf === cpf
  );

  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Customer already exists!" });
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  })

  return response.status(201).send();
})

app.get("/statemen", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.listen(3333)

/*
app.get("/courses", (request, response) => {
 const query = request.query;
 console.log(query);
 return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (request, response) => {
 const body = request.body;
 console.log(body);
 return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (request, response) => {
 const { id } = request.params;
 console.log(id)
 return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (request, response) => {
 return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response) => {
 return response.json(["Curso 6", "Curso 2", "Curso 4"])
})
*/