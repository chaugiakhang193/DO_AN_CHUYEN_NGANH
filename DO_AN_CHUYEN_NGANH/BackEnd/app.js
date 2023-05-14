const express = require('express');
const app = express();

app.get('/login', (req, res) =>{
res.json({"sussess" : ["test"]});
})

app.listen(3000, () =>{console.log("Start server listening on port 3000")})