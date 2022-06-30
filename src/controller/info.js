

const infos = require('../db/info')
const Info = require('../models/Info')

const createInfo = (req,res) =>{
    const {cmd,sender,data} = req.body
    const newInfo = new Info(cmd,sender,data)
    infos.push(newInfo)
    //res.send('Info creada')

    res.status(201).json({
        data: newInfo,
        message:"Info creada",
        statusCode : 201
    })
    var datos = req.body
    //datoS = JSON.stringify(datos)
    //console.log(req.body.data)
    //console.log(JSON.stringify(dataA));


    //convertir a cadena de texto
    //dataA = req.body
    //data = newInfo
    // console.log(data)
    // console.log(JSON.stringify(data, null, 5));
    // JSON.parse(data)

    //socket
    var net = require('net');
    var port = 8001
    var host='localhost'
    let socket = new net.Socket();

    //buffer
    let buf
    buf = Buffer.from(JSON.stringify(datos),'utf-8')


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

// const deleteInfo = (req, res) => {
//     const namePerson = req.params.sender
//     const {sender,apellido,opcion,metodo} = req.body
    
//     function findInfo(singleInfo) {
//         return singleInfo.sender == namePerson
//     }
    
//     const infoToDelete =infos.find(findInfo)
//     const indice = infos.indexOf(infoToDelete)
//     infos.splice(indice, 1)

//     infoToDelete.metodo = 'DELETE'
//     res.status(200).json({
//         data: infoToDelete,
//         message:`Info elimidada con sender ${namePerson}`,
//         statusCode:200
//     })
    
//     ////logica buffer
//     //convertir a cadena de texto
//     //data = req.body
//     data = infoToDelete

//     //socket
//     var net = require('net');
//     var port = 8001
//     var host='localhost'
//     let socket = new net.Socket();

//     //buffer
//     let buf
//     buf = Buffer.from(JSON.stringify(data),'utf-8')


//     console.log("Conectando a servidor...")
//     socket.connect(port, host, () => {
//         socket.write(buf);
//         //console.log(buf)
//     });

//     socket.on('data', data => {
//         console.log(`${data}`);
//     });
    
//     socket.on('close', () => {
//         socket.destroy();
//     });
//     console.log("Conectado a sevidor y mensaje enviado")


//     ///////////////
    
// }


// const putInfo = (req, res) => {
//     const namePerson = req.params.sender
    
//     ///encontrar info e indice
//     function findInfo(singleInfo) {
//         return singleInfo.sender == namePerson
//     }
//     const infoToUpdate =infos.find(findInfo)
//     const indexToUpdate = infos.indexOf(infoToUpdate)


//     ///nuevos datos para info
//     const {cmd,sender,data} = req.body
//     const newInfo = new Info(cmd,sender,data)
    
//     infos.splice(indexToUpdate, 1, newInfo)

//     res.status(200).json({
//         data: newInfo,
//         message:`Info actualizada de ${namePerson} a {sender: ${newInfo.sender}, apellido: ${newInfo.apellido},opcion: ${newInfo.opcion}}`,
//         statusCode:200
//     })



//     ////logica buffer
//     //convertir a cadena de texto
//     //data = req.body
//     data = newInfo

//     //socket
//     var net = require('net');
//     var port = 8001
//     var host='localhost'
//     let socket = new net.Socket();

//     //buffer
//     let buf
//     buf = Buffer.from(JSON.stringify(data),'utf-8')


//     console.log("Conectando a servidor...")
//     socket.connect(port, host, () => {
//         socket.write(buf);
//         //console.log(buf)
//     });

//     socket.on('data', data => {
//         console.log(`${data}`);
//     });
    
//     socket.on('close', () => {
//         socket.destroy();
//     });
//     console.log("Conectado a sevidor y mensaje enviado")



//     //////////
// }

module.exports = {
    createInfo,
    getInfo,
    //deleteInfo,
    //putInfo
}

