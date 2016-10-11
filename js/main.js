console.log("JS file cargado");
var pageLoaded = function(){
  console.log("Página Cargada");
};
document.addEventListener("DOMContentLoaded" , function(){

  var array = [1,2,3,4,5,6,7,8,9,0];
  var index_some = -1;
  var res_some = array.some(function(number , index){
    index_some = index;
    return number < 10;
  });
  console.log(res_some , index_some);
  var index_every = -1;
  var res_every = array.every(function(number , index){
    index_every = index;
    return number < 10;
  });
  console.log(res_every , index_every );
  /*var hash = {
    key: "value1",
    key1: "value2",
    key2: "value3",
    key3: "value4",
    key4: "value5",
    key5: "value6",
    key6: "value7",
    key7: "value8",
    key8: "value9",
  };

  var miArraicito = [];
  for(var key in hash){ //Recorre la posicion "key" en  el objeto hash

    miArraicito.push(key);//Estoy llenando mi arreglo
    miArraicito.push(hash[key]);//muestro el valor que este en la posicion "key"

  }

  console.log(miArraicito.reverse());//imprime los valores al contrario
  console.log(miArraicito);*/
  //console.log(hash);
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
