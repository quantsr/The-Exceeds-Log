/*Code made by Max Arruda Braz*/
var openFile = function(event) {
  oneUploadFlag = true;
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
  var text = reader.result;
  window.globalLog = text.split("\n");
  };
  reader.readAsText(input.files[0]);
   
  document.getElementById("operation-print").disabled= false;
  document.getElementById("operation-membership").disabled= false;
  document.getElementById("operation-storage").disabled= false;
  document.getElementById("operation-treasury").disabled= false;
  
  
}

function readMember(){
  var node = document.getElementById('output');
  if(node.innerText.length > 0){
    node.innerText = "";
  }
  
  for(var i = 0; i < globalLog.length; i++){
    if(globalLog[i].includes(',"Membership",')){
      node.innerText += globalLog[i] + "\n";
    }   
  }
}

function storage(){
  var node = document.getElementById('output');
  if(node.innerText.length > 0){
    node.innerText = "";
  }
  
  for(var i = 0; i < globalLog.length; i++){
    if(globalLog[i].includes(',"Storage",')){
      node.innerText += globalLog[i] + "\n";
    }     
  }   
}

function treasury(){
  var node = document.getElementById('output');
  if(node.innerText.length > 0){
    node.innerText = "";
  }
  
  for(var i = 0; i < globalLog.length; i++){
    if(globalLog[i].includes(',"Treasury",')){
      node.innerText += globalLog[i] + "\n";
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
