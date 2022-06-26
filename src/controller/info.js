
const infos = require('../db/info')
const Info = require('../models/Info')

const createInfo = (req,res) =>{
    const {nombre,apellido,opcion} = req.body
    const newInfo = new Info(nombre,apellido,opcion)
    infos.push(newInfo)
    res.send('Info creada')

    //socket
    console.log("Conectando a servidor...")
    var net = require('net');
    var port = 8000
    var host='localhost'
    let socket = new net.Socket();
  
    socket.connect(port, host, () => {
    
        socket.write("hola");
        
    });
    
    socket.on('data', data => {
        console.log(`${data}`);
      });
      
    socket.on('close', () => {
        socket.destroy();
      });
    console.log("Conectado a sevidor y mensaje enviado")

}

const getInfo = (req,res) =>{
    res.send(infos)
}


module.exports = {
    createInfo,
    getInfo
}

