var express = require('express');
var router = express.Router();

const ContenedorMemoria = require('../Contenedor/contenedorMemoria')
const data = new ContenedorMemoria();

//devuelve todos los productos
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({data:data.getAll()});
});

//devuelve productos por id
router.get('/:id',(req, res)=>{
  let obj = data.getOne(req.params.id);
res.send({data:obj});

})

router.post('/', ({body}, res)=>{
  data.addOne(body)
  res.send({datos:body});
})

router.put('/:id', (req, res)=>{
  res.send({datos:req.body});
})

router.delete('/:id', (req, res)=>{
  let obj = data.deleteOne(req.params.id)
  res.send({datos:obj});
})




module.exports = router;
