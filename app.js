var express = require('express');
var bodyParser=require('body-parser');
var app=express();
app.locals.pretty=true;
app.set('view engine', 'jade');
app.set('views','./views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))

app.get('/form',function(req,res){
    res.render('form');
})

app.post('/form_receiver',function(req,res){
    
    res.send(req.body.title+','+req.body.description);
})


app.get('/topic/:id',function(req,res){
    var topics=[
        'Javascript is...',
        'Nodejs is ...',
        'Express is ...'
    ];

    var output=`
    <a href="/topic/0">Javascript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br>
    ${topics[req.params.id]}
    `;
    res.send(output);
})
app.get('/topic/:id/:name',function(req,res){
    res.send(req.params.id+','+req.params.name)
})

app.get('/template',function(req,res){
    res.render('temp',{time:Date()});
})


app.get('/',function(req,res){
    res.send('welcome to home');
});

app.get('/dynamic',function(req,res){
    var output=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>hello dynamic</h1>
    </body>
    </html>`;
    res.send(output);
})

app.get('/route',function(req,res){
    res.send('hello route,<img src="/huam.jpg">');
});


app.get('/login',function(req,res){
    res.send('login please');
});
app.listen(3000,function(){
    console.log('connected 3000 port!');
});