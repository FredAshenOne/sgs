
$( document ).ready(function() {

$("#tipoPedido").change(function(){
  if($("#tipoPedido").val()=="comercial"){
    $("#empresa").css("display","block");
    console.log("comercial");
  }else{
    $("#empresa").css("display","none");
  }

});

$("#tipoPlayera").change(function(){

  if($("#tipoPlayera").val() == "sudadera"){
    console.log("Sudadera");
    $("#playeraMangas").css("display","none");
    $("#sudaderaGorros").css("display","block");
    $("#sudaderaCierres").css("display","block");
  }else if($("#tipoPlayera").val() == "gorra"){
    console.log("Gorra");
    $("#playeraMangas").css("display","none");
    $("#sudaderaGorros").css("display","none");
    $("#sudaderaCierres").css("display","none");
  }else{
    $("#playeraMangas").css("display","block");
    $("#sudaderaGorros").css("display","none");
    $("#sudaderaCierres").css("display","none");

  }

});

$("#caballeroCheckbox").change(function(){
    if($(this).prop('checked')){
    $("#tallasCaballero").css('display','block');
  }else{
    $("#tallasCaballero").css('display','none');
  }
});

$("#damaCheckbox").change(function(){
  if($(this).prop('checked')){
    $("#tallasDama").css('display','block');
  }else{
    $("#tallasDama").css('display','none');
  }
});

$("#juvenilCheckbox").change(function(){
  if($(this).prop('checked')){
    $("#tallasJuvenil").css('display','block');
  }else{
    $("#tallasJuvenil").css('display','none');
  }
});

$("#niñoCheckbox").change(function(){
  if($(this).prop('checked')){
    $("#tallasNiño").css('display','block');
  }else{
    $("#tallasNiño").css('display','none');
  }
});

$("#infantilCheckbox").change(function(){
  if($(this).prop('checked')){
    $("#tallasInfantil").css('display','block');
  }else{
    $("#tallasInfantil").css('display','none');
  }
});

});
