//Sesion storaje

let usuario=document.getElementById("usuario");
let contrasena=document.getElementById("contra1");

let grabar= document.getElementById("grabar");
let leer= document.getElementById("leer");
let borrar= document.getElementById("borrar");

grabar.addEventListener("click", grabaStorage,false);
leer.addEventListener("click",visualizaStorage,false);
borrar.addEventListener("click",borrarStorage,false);

let tarea = new Array();
let contador=0;

function autentificacion(uusuario, ccontrasena){
            this.uusuario = uusuario;
            this.ccontrasena = ccontrasena;
            this.toString = toString;
        }
function toString(){
    return this.uusuario + "," + this.ccontrasena;
}

let bAcceder=document.getElementById("accesoM");

bAcceder.addEventListener("click",acceder,false);

function acceder(){
    var registro1 = new autentificacion(usuario.value,contrasena.value);
    window.sessionStorage.setItem("usuario", registro1.toString());
    var reg = window.sessionStorage.getItem(usuario);
        alert("Datos Leidos  :" + reg);

}

function grabaStorage(){
   
    tarea[0] = document.getElementById("tarea").value;
    tarea[1] =  document.getElementById("Tp").value;
    tarea[2] =  document.getElementById("Te").value;
    tarea[3] =  document.getElementById("descripcion").value;

    window.sessionStorage.setItem(tarea, tarea);
    var reg = window.sessionStorage.getItem(tarea);

    window.localStorage.setItem(tarea, tarea);
    var reg1 = window.localStorage.getItem(tarea);
    alert(reg);
    alert(reg1);
}
let datosTabla=new Array();

function visualizaStorage(){
    alert("entra");    
    for(i=0;i<sessionStorage.length;i++){
        let key = window.sessionStorage.key(i);
        datosTabla=window.sessionStorage.getItem(key);
        
        let parrafo=document.createElement('p');
        parrafo.innerHTML=datosTabla;
        document.getElementById("datatable").appendChild(parrafo);

    }

    for(i=0;i<localStorage.length;i++){
        let key = window.localStorage.key(i);
        datosTabla=window.localStorage.getItem(key);
        
        let parrafo=document.createElement('p');
        parrafo.innerHTML=datosTabla;
        document.getElementById("datatable").appendChild(parrafo);

    }
}


function borrarStorage(){
    localStorage.clear();
    sessionStorage.clear();
    alert("Se han borrado los datos del almacen")
}
 
 