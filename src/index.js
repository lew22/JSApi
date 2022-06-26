
const app = require('./app')


//servidor escuchando
app.listen(app.get('PORT'), () =>{

    console.log(`Servidor en puerto ${app.get('PORT')}`)

})
