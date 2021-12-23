function createList(num,text){
  var lista = document.getElementById("Listagem");
  lista.innerHTML = "";
  num = parseInt(num,10)
  
  for(var i=0;i<num;i++){
      if(text==""){
          var text = "Text";

      }
      var item = document.createElement("li");
      var textoItem = document.createTextNode(text+" "+(i+1));
      item.appendChild(textoItem);
      document.getElementById("Listagem").appendChild(item);
  }
}