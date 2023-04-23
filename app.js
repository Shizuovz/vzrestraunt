const con = require('./connection');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get("/Index1",function(req,res){
    res.sendFile(__dirname+'/Index1.html');
});

app.post('/',function(req,res){
    // console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let phno = req.body.phno;
    let address = req.body.address;
    let orders = req.body.orders;

    con.connect(function(err){
        if(err) throw err;

        let sql = "INSERT INTO orders (name,email,phno,address,orders) VALUES(?,?,?,?,?)";
        con.query(sql,[name,email,phno,address,orders],function(err,result){
            if(err) throw err;
            res.send("Success!! "+result.insertId);
        })
    })
})

app.listen(5501);