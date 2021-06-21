function recibir(){
let formulario = document.forms['formulario'];
    var x = formulario['payasos'];
    var y=formulario['muñecas']
    payasos= (x.value);
    muñecas=(y.value);

    let peso_de_payasos=payasos*112;
    let peso_de_muñecas=muñecas*75;
    
    let kilo=(peso_de_payasos+peso_de_muñecas)/1000;
    console.log(kilo);

    var numero_sobrante=kilo%1000;
    var numero_cajas=0;

    if(numero_sobrante=0){
        numero_cajas=kilo;
    }else{
        numero_cajas=parseInt(kilo+1);
    }
    document.write('<h1>Total de kilos: <h1> '+kilo);
    document.write('<h1>Los paquetes a enviar son:<h1> '+ numero_cajas);
    console.log(numero_cajas);

    total_peso_de_payasos=peso_de_payasos;
    total_peso_de_muñecas=peso_de_muñecas;

    document.write('<h1>Total de peso de los payasos:<h1>' + total_peso_de_payasos/1000+'kg');
    document.write('<h1>Total de peso de las muñecas:<h1>' + total_peso_de_muñecas/1000+'kg');

}
        
/*
if(kilo % 2==0){
    console.log('los paquetes de envio son: '+ kilo + ' el peso es: '+ kilo);
}else if(kilo>=1){
    console.log('los paquetes enviados son: '+ kilo);
}else if(kilo<=1){
    console.log('los paquetes enviados son: '+kilo);
}
*/

