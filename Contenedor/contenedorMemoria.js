const {contentDisposition} = require("express/lib/utils");

class ContenedorMemoria{
    miId=0;
    constructor() {
        this.productos =[

        ];
    }

    getAll(){
        return this.productos;
    }

    getOne(id){
        let obj = this.productos;
        return obj.filter(p=>p.id== Number(id));
    }

    updateOne(id, obj){
        this.productos.forEach(p=>{
            if(p.id==Number(id)){
                p=obj;
            }

        })
        return this.productos;
    }

    deleteOne(id){
        let obj = this.productos.filter(p=>p.id!=Number(id));
        this.productos = obj;
        return obj;
    }

    addOne(obj){
        obj.id = this.miId++;
        //this.productos.push(obj);
        this.productos=[...this.productos, obj];
    }
}

module.exports = ContenedorMemoria;