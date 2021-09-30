import express from 'express';

const app = express();

app.get("/" , (requet, response) => {
 return response.json({message : "Hello world"})
})

app.listen(3333);
