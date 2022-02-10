import express from 'express';
import { router } from '../routes';
const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use(router)

app.use("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));