 let grabar= document.getElementById("grabarCookie");
 let leer= document.getElementById("leerCookie");
 grabar.addEventListener("click", grabaCookie,false);
 leer.addEventListener("click",leeCookie,false);

 let datosc=document.cookie;
 let mensajeCookie="Utilizamos cookies analiticas";
 //alert(datosc);
 
 Swal.fire({
   title: "Sitio con sookies",
   showDenyButton: true,
   showCancelButton: true,
   text: mensajeCookie,
   imageUrl: 'imagenes/logo.png',
   imageWidth: 200,
   imageHeight: 200,
   imageAlt: 'Cookies',
}).then(function(result){
   if(result.isConfirmed){
      Swal.fire('Cookies Aceptadas','','success')
   }else{
      Swal.fire('Cookies Rechazadas, no las usaremos','<a href="https://blog.ensalza.com/politica-de-cookies/">Política de cookies</a>','info')
      grabar.removeEventListener("click", grabaCookie,false);
      leer.removeEventListener("click",leeCookie,false);
   }
});

 function grabaCookie(){
    let dTarea=document.getElementById("tarea").value;
    let dTp=document.getElementById("Tp").value;
    let dTe=document.getElementById("Te").value;
    let dDescripcion=document.getElementById("descripcion").value;
  
    let  fechaMuerte=new Date();
        
    dias=8-fechaMuerte.getDay();

    fechaMuerte.setDate(fechaMuerte.getDate() + dias);
    let fechaHora= new Date();
    let  claveCookie=fechaHora.getTime();         

    let  galleta = claveCookie + "=" + claveCookie + "," + dTarea + "," + dTp + "," + dTe+","+dDescripcion+ ";expires=" + fechaMuerte.toGMTString();
 alert(galleta)
    // Crea la cookie y la almacena en el navegador
    document.cookie = galleta;

 }
 let datosTabla=new Array();
 function leeCookie(){
   let datos=document.cookie;
   let registros=datos.split(";");
   for (i=0;i<registros.length;i++){
      let registro=registros[i];
      alert(registro);
      let campos= registro.split(",");
      let linea=[campos[0],campos[1],campos[2],campos[3],campos[4]]
      datosTabla.push(linea);
   }
  visualizaTabla();
 }
 function visualizaTabla(){
    // Establecemos el onjeto creado de DataTable con el div
    // html sobre el cual vamos a visualizar los datos
    const datatables= new DataTable("#datatable",{
       columns:[
          {
            name:'Clave',
            id:'Clave',
            editable:false,
            resizable:true,
            focusable:true,
            drowdown:false,
            width:15,
            format:(value)=>{
               return "<input  type='button' value="+value+" onclick='borrarCookie(value)'> </input>"
            }

          },'TAREA','Tpo.Progra','Tpo.Emple','Descripción'],
          data:datosTabla
       
    });
    datosTabla=new Array();

 }
 function borrarCookie(claveCookie){
   alert(claveCookie);
   let  fechaMuerte=new Date();      

   fechaMuerte.setDate(fechaMuerte.getDate() -1);
   let fechaHora= new Date();
   
   let  galleta = claveCookie + "=" + ";expires=" + fechaMuerte.toGMTString();
 // Borra  la cookie y la almacena en el navegador con una fecha anterior a la actual
   document.cookie = galleta; 
   visualizaTabla();
 }

