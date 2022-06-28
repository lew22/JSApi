
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

const deleteInfo = (req, res) => {
    const namePerson = req.params.nombre
    
    function findInfo(singleInfo) {
        return singleInfo.nombre == namePerson
    }
    
    const infoToDelete =infos.find(findInfo)
    const indice = infos.indexOf(infoToDelete)
    infos.splice(indice, 1)


    res.status(200).json({
        data: infoToDelete,
        message:`Info elimidada con nombre ${namePerson}`,
        statusCode:200
    })

    ////logica buffer



    ///////////////
    
}


const putInfo = (req, res) => {
    const namePerson = req.params.nombre
    
    ///encontrar info e indice
    function findInfo(singleInfo) {
        return singleInfo.nombre == namePerson
    }
    const infoToUpdate =infos.find(findInfo)
    const indexToUpdate = infos.indexOf(infoToUpdate)


    ///nuevos datos para info
    const {nombre,apellido,opcion} = req.body
    const newInfo = new Info(nombre,apellido,opcion)
    
    infos.splice(indexToUpdate, 1, newInfo)

    res.status(200).json({
        //data: newInfo,
        message:`Info actualizada de ${namePerson} a {nombre: ${newInfo.nombre}, apellido: ${newInfo.apellido},opcion: ${newInfo.opcion}}`,
        statusCode:200
    })



    ////logica buffer




    //////////
}

module.exports = {
    createInfo,
    getInfo,
    deleteInfo,
    putInfo
}

