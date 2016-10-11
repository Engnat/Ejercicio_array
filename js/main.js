console.log("JS file cargado");
var pageLoaded = function(){
  console.log("Página Cargada");
};
document.addEventListener("DOMContentLoaded" , function(){
  var list_li = document.querySelectorAll(".list_item");//devuelve los elementos dentro de un array
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

  });

}); //Escucha que responde a un evento
