const express = require("express");
const { v4: uuidv4 } = require('uuid')

const app = express();

const customers = [];

app.use(express.json())

function verifyIfExistsAccount(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Customer not found!" });
  }

  request.customer = customer;
  console.log(request.customer)
  return next();
}

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

// app.use(verifyIfExistsAccount);

app.get("/statement", verifyIfExistsAccount, (request, response) => {
  const { customer } = request;
  console.log(customer)
  return response.json(customer.statement);
})

app.post("/deposit", verifyIfExistsAccount, (request, response) => {
  const { description, amount } = request.body;
  
  const { customer } = request;

  const statementOperation = {
    description, 
    amount,
    created_at: new Date(),
    type: "credit"
  };

  customer.statement.push(statementOperation);
  
  return response.status(201).send();
})

app.listen(3333)