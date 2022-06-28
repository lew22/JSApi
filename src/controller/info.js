

const infos = require('../db/info')
const Info = require('../models/Info')

const createInfo = (req,res) =>{
    const {nombre,apellido,opcion} = req.body
    const newInfo = new Info(nombre,apellido,opcion)
    infos.push(newInfo)
    //res.send('Info creada')

    res.status(201).json({
        data: newInfo,
        message:"Info creada",
        statusCode : 201
    })

    //convertir a cadena de texto
    data = req.body
    //console.log(data)
    //console.log(JSON.stringify(data, null, 5));
    //JSON.parse(data)

    //socket
    var net = require('net');
    var port = 8001
    var host='localhost'
    let socket = new net.Socket();

    //buffer
    let buf
    buf = Buffer.from(JSON.stringify(data),'utf-8')


    console.log("Conectando a servidor...")
    socket.connect(port, host, () => {
        socket.write(buf);
        //console.log(buf)
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
    //res.send(infos)

    res.status(200).json({
        data: infos,
        message:"Info encontrada",
        statusCode:200
    })
}


module.exports = {
    createInfo,
    getInfo
}

