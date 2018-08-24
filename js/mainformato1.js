
$( document ).ready(function() {
var id = 1;

$("#tipoPedido").change(function(){
  if($("#tipoPedido").val()=="comercial"){
    $("#empresa").css("display","block");
    console.log("comercial");
  }else{
    $("#empresa").css("display","none");
  }

});

$("#tipoEnvio").change(function(){
  if($("#tipoEnvio").val()=="Envio"){
    $("#DomicilioEnvio").css("display","block");
  }else{
    $("#DomicilioEnvio").css("display","none");
  }

});
$("#botonNuevoProducto").click(function(){

  $("#nuevoProducto").clone().attr("id","nuevoProducto"+id).appendTo("#pedidos");
  id++;
  console.log(id);
});



});
