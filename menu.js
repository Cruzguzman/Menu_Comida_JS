//usuario para hacer pedidos
let user={
    nom_user:"Miguel",
    edad: 31,
    deuda:0
}

let pedido=[]
let pagar=0

// muestra menu de platillos como: nombre y precio
const mostrarmenu = () => {
    console.log(`NOMBRE PRODUCTO-COSTO`)
   // productos.map(producto=> console.log(`${producto.nombre_producto}-$${producto.costo}`))

    for(let producto of productos){
       
        console.log(`${producto.nombre_producto}-$${producto.costo}`)

    }
}

//funcion para pedir orden
const ordenar_platillo=nom=>{
    if(!nom) return `Anota el nombre del platillo`
   const buscar_pro= productos.find(producto =>producto.nombre_producto==nom)
   if(!buscar_pro) return `Platillo no encontrado`
   pedido.push(buscar_pro)
   console.log(`Platillo agregado a su pedido: `)
   return mostrar_pedido
}

// muestra orden pedido
const mostrar_pedido=() =>pedido

//calcula costo
const calcular_costo=()=>{
    let costo=0
    for(productos of pedido){
        pagar+=productos.costo
        
    }
    pagar=costo
    return pagar
    
}

// finaliza pedido y calcula costo a pagar
const finalizar_pedido=()=>{
    calcular_costo()
    user.deuda=pagar
    pedido=[]
    pagar=0
    
    return `$(user.nombre),total a pagar $(user.deuda)`
    }
// calcula monto acorde a saldo
    const pagar_pedido=monto =>{
        if(monto<user.deuda){
        return `Saldo menor`
    }else if(monto==user.deuda){
        user.deuda=0
        return `Pedido pagado`
    }else {
        user.deuda=0
        return `Pedido pagado, cambio de : ${monto-user.deuda}`
    }
}