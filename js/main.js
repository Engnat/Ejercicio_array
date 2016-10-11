console.log("JS file cargado");
var pageLoaded = function(){
  console.log("Página Cargada");
};
document.addEventListener("DOMContentLoaded" , function(){
  var hash = {
    key: "value",
    key1: "value",
    key2: "value",
    key3: "value",
    key4: "value",
    key5: "value",
    key6: "value",
    key7: "value",
    key8: "value",
  };

  console.log(hash);
  /*var list_li = document.querySelectorAll(".list_item");//devuelve los elementos dentro de un array
  list_li = Array.from(list_li);
  console.log("Primer For each");
  for(var li_pos in list_li){
    list_li[li_pos].addEventListener("click" , function(){
      console.log(list_li[li_pos]);
    });
  }
  list_li.forEach(function(element_li , index , array){
    element_li.addEventListener("click" , function(){
      console.log(element_li);
    });

    //console.log(array.shift());
    //console.log(array.pop());

  });*/

/*var carro = {
  ruedas : ["fr" , "fl" , "tr" , "tl" ],
  representacion_html : null,
};

carro.representacion_html = document.createElement("div");
document.appendChild(carro.representacion_html);
carro.addEventListener("click" , function(){

});*/

}); //Escucha que responde a un evento
