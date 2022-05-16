//npm i express
var express=require('express');
//socket kütüphanesi npm i socket.io
var socket=require('socket.io');
//express kurlumu
var app=express();
//server kurulumu
var server=app.listen(3000,function(){

    console.log('3000.portu dinleniyor');

});

//socket kurulumu bağlantı
var io=socket(server);
//bağlantıyı aç
io.on("connection", (socket) => {

    socket.on('chat2',function(data){
        //console.log(data);

        io.sockets.emit('chat2',data);
    });

    socket.on('yaziyor',function(data){
        socket.broadcast.emit('yaziyor',data);

    });

  });

//static dosyaları tuttugunu belirtir ve klasörü buraya yönlendirir.
app.use(express.static('public'));