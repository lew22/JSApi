
const { json } = require('express')
const { send } = require('process')
const { stringify } = require('querystring')
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
    // nombre:`${newInfo.nombre}`,
    // apellido:`${newInfo.apellido}`,
    // opcion:`${newInfo.opc}`
    // infosend.append("nombre")
    // datos.append(newInfo.nombre)



    //socket    // console.log("Conectando a servidor...")
    var net = require('net');
    var port = 8001
    var host='localhost'
    let socket = new net.Socket();

    //buffer
    let buf
    bnombre = newInfo.nombre
    bapellido = newInfo.apellido
    bopcion = newInfo.opcion
    btotal = "{"+"nombre:"+bnombre+","+"apellido:"+bapellido+","+"opcion:"+bopcion+"}"

    buf = Buffer.from(btotal,'utf-8')
    console.log(buf.toString())

    socket.connect(port, host, () => {
        socket.write(buf);
        // console.log(buf)
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

