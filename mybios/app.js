const express = require('express')
const Twit = require('twit')
const cors = require('cors')
const app = express()
const port = 3000
const serverless = require('serverless-http');


const client = new Twit({
    consumer_key: 'BYFev5CvRdyx7EgOQpLKEwTLG',
    consumer_secret: 'dkDkC4NSRTTAjcRJaGeD9hlXfTJOPFBiAIhvEdaSTJZKTtGnJp',
    access_token: '51788921-CMYMxgZ4TvOP7OjXTqC8GsjULjn0hfjzCsifAkHCj',
    access_token_secret: 'pwImFpNUQr86ar85bX2azpnvLgwWENqYkmMDQ2iEcJGvs',
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