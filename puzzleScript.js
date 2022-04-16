function check1(){
  var a1=document.getElementById("answer1.1").value;
  var a2=document.getElementById("answer1.2").value;
  var a3=document.getElementById("answer1.3").value;
  if (a1=="+"&&a2=="*"&&a3=="-"){
    alert("你答对了！");
  }else{
    alert("你答错了:(");
  }
}

function check2(){
  var a1=document.getElementById("answer2.1").value;
  var a2=document.getElementById("answer2.2").value;
  var a3=document.getElementById("answer2.3").value;
  if (a1=="+"&&a2=="+"&&a3=="*"){
    alert("你答对了！");
  }else{
    alert("你答错了:(");
  }
}

function check3(){
  var a1=document.getElementById("answer3.1").value;
  var a2=document.getElementById("answer3.2").value;
  var a3=document.getElementById("answer3.3").value;
  if (a1=="*"&&a2=="/"&&a3=="*"){
    alert("你答对了！");
  }else{
    alert("你答错了:(");
  }
}

function check4(){
  var a1=document.getElementById("answer4.1").value;
  var a2=document.getElementById("answer4.2").value;
  var a3=document.getElementById("answer4.3").value;
  if (a1=="*"&&a2=="*"&&a3=="/"){
    alert("你答对了！");
  }else{
    alert("你答错了:(");
  }
}
