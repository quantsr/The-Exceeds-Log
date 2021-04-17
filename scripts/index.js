var it = 0;
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
  document.getElementById("operation-storage").disabled= false;
}

var openFile2 = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
  var text = reader.result;
  window.globalLog2 = text.split("\n");
  };
  reader.readAsText(input.files[0]);
  
 
  document.getElementById("operation-membership").disabled= false;
  document.getElementById("operation-print").disabled= false;
  document.getElementById("operation-storage").disabled= false;
}

function readMember(){
  //first div
  var node = document.getElementById('output');
  if(node.innerText.length > 0){
    node.innerText = "";
  }
  
  for(var i = 0; i < globalLog.length; i++){
    if(globalLog[i].includes(',"Membership",')){
      node.innerText += globalLog[i] + "\n";
    }   
  }         
  //second div
   var node2 = document.getElementById('output2');
  if(node2.innerText.length > 0){
    node2.innerText = "";
  }
  
  for(var i = 0; i < globalLog2.length; i++){
    if(globalLog2[i].includes('"Membership"')){
      node2.innerText += globalLog2[i] + "\n";
    }   
  } 
}

function storage(){
  //first div
  var node = document.getElementById('output');
  if(node.innerText.length > 0){
    node.innerText = "";
  }
  
  for(var i = 0; i < globalLog.length; i++){
    if(globalLog[i].includes('"Storage"')){
      node.innerText += globalLog[i] + "\n";
    }    
  }   
  //second div
  var node2 = document.getElementById('output2');
  if(node2.innerText.length > 0){
    node2.innerText = "";
  }
  
  for(var i = 0; i < globalLog2.length; i++){
    if(globalLog2[i].includes('"Storage"')){
      node2.innerText += globalLog2[i] + "\n";
    }    
  }   
}

function print(){
  //first div
  var node = document.getElementById('output');
  if(node.innerText.length > 0){
    node.innerText = "";
  }
  for(var i = 0; i < globalLog.length; i++){
      node.innerText += globalLog[i] + "\n";     
  }
  //second div
  var node2 = document.getElementById('output2');
  if(node2.innerText.length > 0){
    node2.innerText = "";
  }
  for(var i = 0; i < globalLog2.length; i++){
      node2.innerText += globalLog2[i] + "\n";     
  }
}
  

 
