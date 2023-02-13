// let {addition} = require('./addition.js');
// addition(3, 7);
// addition(7, 7);

const express = require('/express.js');
//express app
const port = parseInt(process.env.port) || 4000;

const app = express ();

//router

const route = express.Router();

app.use( 
    route  
)

route.get('/', (req, res)=>{
    res.status(200).send("Well done");
})

app.listen(port, ()=>{
     console.log(`server is running at port ${port}`)
});
