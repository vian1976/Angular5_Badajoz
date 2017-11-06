
//NOVEDADES ES6
//Si se define la variable como let o const tiene ambito de la función o mediante  {}
let aDatos = [{precio:23},{precio: 45},{precio:65}];

aDatos.length;

//Recorrer elementos array
/*
aDatos.forEach(function(element) {
});
*/
//Recorrer elelementos del array
/*
aDatos.forEach(element => {

});
*/

//Si quiero retornar un elemento y la propiedad
/*
aDatos.forEach(element => {return element.precio});
aDatos.forEach(element => element.precio);
*/
aDatos.forEach(element => {
    let iva=1.22;
    let precioFinal = element.precio*iva;
    //console.log("Precio Final:" +precioFinal);
    console.log(`
        El precio es ${precioFinal}
        `
    )
});

//console.info(aDatos.length);

