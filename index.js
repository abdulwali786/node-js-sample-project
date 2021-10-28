var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendFile(__dirname+'/public/node.svg')
})

app.get('/walipic', function(request, response) {
  response.sendFile(__dirname+'/public/img.png')
})



app.get('/google', function(request, response) {
  response.sendFile(__dirname+'/public/google.html')
})

app.get('/account', function(request, response) {
  var mount_of_money = 100
  var body= {
    money:mount_of_money
  }
  response.status(200).send(body)
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
