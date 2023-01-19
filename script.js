//variables que obtienen los elementos de html como botones y textarea
var entrada=document.querySelector("textarea#texto-entrada");
var salida=document.querySelector("textarea#resultado");
var encriptar=document.querySelector("button#encriptador");
var desencriptar=document.querySelector("button#desencriptador");
var copiar=document.querySelector("button#portapapeles");
//variables que indican la clave
var inputCodigo=["a","e","i","o","u"];
var outputCodigo=["ai","enter","imes","ober","ufat"];

//codifica el contenido de la caja de entrada y lo muestra en la caja de salida
function encriptarTexto(){
    
    var texto=entrada.value;
    var map= Array.prototype.map;
    var listaencriptada=map.call(texto,function(char){
        if(char=='a'|char=='e'|char=='i'|char=='o'|char=='u'){
            return outputCodigo[inputCodigo.indexOf(char)];
            //return clave[char];
        } else{
            return char;
        }
    });
    var encriptado=listaencriptada.join('');
    
    salida.value=encriptado;
    if(encriptado!=""){
        limpiar("textarea#texto-entrada","none","none","visible");
    }
    
}

// desencripta el texto de la caja de entrada según la clave dada y lo muestra en la caja de salida
function desencriptarTexto(){

    var desencriptado="";
    var texto=entrada.value;
    for(var i=0;i<=inputCodigo.length;i++){
        texto=texto.replaceAll(outputCodigo[i],inputCodigo[i]);
    }
    desencriptado=texto;
    salida.value=desencriptado;
    if(desencriptado!=""){
        limpiar("textarea#texto-entrada","none","none","visible");
    }
    

}

//envia un elemento al portapeles y limpia el cuadro de salida
function copiarTexto(){

    navigator.clipboard.writeText(salida.value);
    limpiar("textarea#resultado","block",defineImagen(),"hidden");

}
//resetea la configuración una vez se ha encriptado o desencriptado un mensaje, o la devuelve al estado original, dependiendo de los argumentos usados en la funcion
function limpiar(idCaja,texto2,imagenFondo,botonCopia){

    document.querySelector(idCaja).value="";
    document.getElementById("informacion2").style.display=texto2;
    document.getElementById("resultado").style.backgroundImage=imagenFondo;
    document.getElementById("portapapeles").style.visibility=botonCopia;
}
//define que debe mostrarse en el textarea de salida cuando sea reseteado, cambia en función de la pantalla del dispositivo
function defineImagen(){
    if(screen.width<=480){
        return "none";
    }else{
        return "url(images/Muñeco.png)"
    }
}


encriptar.onclick=encriptarTexto;
desencriptar.onclick=desencriptarTexto;
copiar.onclick=copiarTexto;