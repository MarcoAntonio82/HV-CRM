//const 
//calculo de gastos
const ingreso = document.getElementById("ingreso")
const gastos = document.getElementById("gastos")

const ingresosTotales = document.getElementById("ingresoTotal")
const showTotal = document.getElementById("showTotal")

const capacidadPago = document.getElementById("capacidadPago")
const paidCap = document.getElementById("paidCap")

//informacion de cliente 
const nombrex = document.getElementById("nombre")
const  celularx= document.getElementById("celular")
const  correox = document.getElementById("correo")
const infox = document.getElementById("info")

const potencialx = document.getElementById("potencial")
const noPotencialx = document.getElementById("noPotencial")
const intermediox = document.getElementById("intermedio")
const noIntersadox = document.getElementById("noIntersado")

const webx = document.getElementById("web")
const redesx = document.getElementById("redes")
const ubicacionx = document.getElementById("ubicacion")
const recomendadox = document.getElementById("recomendado")

const enviarx = document.getElementById("enviar")
const datoClientex = document.getElementById("datoClientes")

const resumen = document.getElementById("resumen")
const clientes = document.getElementById("clientes")

const sinDato = document.getElementById("sinDato")


//functions


const totalesIngre = (x,z)=>{
    return x-z
    }
const totalesCap = (x,z)=>{
    return ((x-z)/3)
    }  


//events                                  // x que no se actaulice la web
ingresosTotales.addEventListener("click",(event)=>{event.preventDefault()
    const infoOne = parseInt(ingreso.value)
    const infoDos = parseInt(gastos.value)
    const totalesResu = totalesIngre(infoOne,infoDos)
    return showTotal.innerHTML=totalesResu;
    })
capacidadPago.addEventListener("click",(event)=>{event.preventDefault()
    const infoOne = parseInt(ingreso.value)
    const infoDos = parseInt(gastos.value)
    const totalesCapix = totalesCap(infoOne,infoDos)
    return paidCap.innerHTML=totalesCapix;
    })
    
enviarx.addEventListener("click",()=>{
const nombreY = nombrex.value;
const celuraY = parseInt(celularx.value);
const correoY = correox.value;
const infoY = infox.value;

const potencialY = potencialx.value;
const noPotencialY = noPotencialx.value;
const intermedioY = intermediox.value;
const noIntersadoY = noIntersadox.value;

const webY = webx.value;
const redesY = redesx.value;
const ubicacionY = ubicacionx.value;
const recomendadoY = recomendadox.value;
const pagoFinal = paidCap.innerHTML;//x el valor del html Inner 
    
    //aca quedo 
return datoClientex.innerHTML=`<p>${nombreY}</p>
    <p> ${celuraY}</p><p> ${correoY}</p><p>${infoY}</p>
    <p> ${potencialY}</p><p> ${noPotencialY}</p><p> ${intermedioY}</p>
    <p> ${noIntersadoY}</p><p>${webY}</p><p> ${redesY}</p>
    <p> ${ubicacionY}</p><p>${recomendadoY}</p>
    <p>${pagoFinal}</p>`
     })

//lo desarrolle Mark  duda x la clase
resumen.addEventListener("click",()=>{
     const datos= []
     const meter = datos.push(datoClientex.innerHTML)//
       return clientes.innerHTML+=`<p>${datos}</p>`
      })
  
 sinDato.addEventListener("click",()=>{
     const sinInfo = []
    const salir = sinInfo.pop(datoClientex.innerHTML) 
    return clientes.innerHTML=`<p>${sinInfo}</p>`
    })



 //graficas
 let ctx = document.getElementById('myChart').getContext('2d');
 let myChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
         datasets: [{
             label: '# of Votes',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero: true
                 }
             }]
         }
     }
 });


// const info = []
// const dato = info.push('juan');
// console.log(info)





