
$(document).ready(function() {
    $("#btn1").click(function() {
      $("#form1").show(300);
      $("#form2").hide(300);
      $("#form3").hide(300);
      $("#form4").hide(300);
      $("#form5").hide(300);
    });
    $("#btn2").click(function() {
      $("#form2").show(300);
      $("#form1").hide(300);
      $("#form3").hide(300);
      $("#form4").hide(300);
      $("#form5").hide(300);
    });
    $("#btn3").click(function() {
      $("#form3").show(300);
      $("#form1").hide(300);
      $("#form2").hide(300);
       $("#form4").hide(300);
      $("#form5").hide(300);
    });
    $("#btn4").click(function() {
        $("#form4").show(300);
        $("#form1").hide(300);
        $("#form2").hide(300);
        $("#form3").hide(300);
        $("#form5").hide(300);
      });
      $("#btn5").click(function() {
        $("#form5").show(300);
        $("#form1").hide(300);
        $("#form2").hide(300);
        $("#form3").hide(300);
        $("#form4").hide(300);
      });
  });
  function imagepreview(simg){
    var myDIV=document.getElementById("myDIV");
    var simg=document.getElementById("simg");
    myDIV.src=simg.src;
    
        }
