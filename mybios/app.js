const express = require('express')
const Twit = require('twit')
const cors = require('cors')
const app = express()
const port = 3000
const serverless = require('serverless-http');


const client = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: '',
    //timeout_ms: 60*1000,
})

app.use(cors())



app.get('/', (req, res)=>{
    
    client.get('users/show', {screen_name: 'cangrejozurdo'}, function(err, data, response){
        res.send(data.description);    
       
    }) 
       
})

app.listen(port, () => {
    console.log(`it works!${port}`)
})

module.exports.handler = serverless(app);
