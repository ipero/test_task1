var array = ['aaa','bbb','xxx','ddd','fff', 'yyy', 'vvv'];
var showArr = "";
var i = 0;
$(document).ready(function(){
  myFunction();
  function myFunction() {
   if(i<array.length){
      setTimeout(function(){ showArr += array[i] + ", "; $('.display').text(showArr); i++; myFunction(); }, 1000);
   }
  }
});
