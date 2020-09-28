export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

//calcular el total a pagar segun la marca 
export function calcularMarca(marca){
    let incremento
    //valores por marca
    //americano 15
    //asiatico 5 
    //europeo 30

    switch (marca) {
        case 'europeo':
                incremento = 1.30;
            break;
        case 'americano':
                incremento = 1.15;
            break;
        case 'asiatico':
                incremento = 1.05;
            break;

        default:
            break;
    }
    return incremento;
}
//calcular segun el plan
export function calcularPlan(plan){
    
        //basico 20%
        //completo 50%
    return(plan ==='basico') ? 1.20 :1.50;
}
//first letter uppercase

export function firstletter (texto){
    return texto.charAt(0).toUpperCase() +texto.slice(1);
}