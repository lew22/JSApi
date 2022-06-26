//traemos las rutas y la const createinfo
const {Router} = require('express')
const {createInfo, getInfo} = require('../controller/info')

// inicializamos las rutas
const router = Router()

router.get('/',(req,res) =>{
    res.send("Hola")
})

router.post('/create',createInfo)
router.get('/getinfo',getInfo)



module.exports = router
