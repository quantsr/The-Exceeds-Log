var openFile = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
  var text = reader.result;
  window.globalLog = text.split("\n");
  };
  reader.readAsText(input.files[0]);
  
 
  document.getElementById("operation-membership").disabled= false;
  document.getElementById("operation-print").disabled= false;
}


function readMember(){
  var node = document.getElementById('output');
  if(node.innerText.length > 0){
    node.innerText = "";
  }
  
  for(var i = 0; i < globalLog.length; i++){
    if(globalLog[i].includes('"Membership"')){
      node.innerText += globalLog[i] + "\n";
    }else{
      i++;
    }     
  }         
        
}
    
function print(){
  var node = document.getElementById('output');
  if(node.innerText.length > 0){
    node.innerText = "";
  }
  for(var i = 0; i < globalLog.length; i++){
      node.innerText += globalLog[i] + "\n";
     
  }
}
  

 
