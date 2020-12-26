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
    //grafica 
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Ingresos', 'Gastos', 'Grabable',],
                datasets: [{
                    label: '# Ingresos',
                    data: [infoOne,infoDos,totalesResu],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        
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
    return showTotal.innerHTML=totalesResu;
    })

capacidadPago.addEventListener("click",(event)=>{event.preventDefault()
    const infoOne = parseInt(ingreso.value)
    const infoDos = parseInt(gastos.value)
    const totalesCapix = totalesCap(infoOne,infoDos)
    //grafica
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Ingresos', 'Gastos', 'Capacidad',],
                datasets: [{
                    label: '# Capacidad Pago',
                    data: [infoOne,infoDos,totalesCapix],//paso objetos 
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        
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

//lo desarrolle Mark  
resumen.addEventListener("click",()=>{
     const datos= []
     const meter = datos.push(datoClientex.innerHTML)
       return clientes.innerHTML+=`<p>${datos}</p>`
      })
  
 sinDato.addEventListener("click",()=>{
     const sinInfo = []
    const salir = sinInfo.pop(datoClientex.innerHTML) 
    return clientes.innerHTML=`<p>${sinInfo}</p>`
    })
    


    
    




