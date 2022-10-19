const panel = document.getElementById("panel")
document.body.style.background = "black"
document.body.style.color = "white"
const algoritmo_lineal = (semilla,a,c,m) =>{

    let entero = (a*semilla+c)%m
    let r = entero/(m-1)
    ssemilla = entero
    console.log(entero,r)
    console.log("----")
    const colum1 = document.getElementById("colum1")
    const colum2 = document.getElementById("colum2")
    const col1 =document.createElement("tr")
    const col2 =document.createElement("tr")
    col1.innerHTML = `${r}`
    col2.innerHTML = `${entero}`
    colum1.append(col1)
    colum2.append(col2)

} 

let ssemilla=23
var cantidad=200
pseudoaleatorios = []
    for (let index = 0; index < cantidad; index++) {
        algoritmo_lineal(ssemilla,121,553,177)
    }
