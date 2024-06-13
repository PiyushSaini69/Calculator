let result1 = document.getElementById('result').innerText;
function appendCharacter(a){
   result1 += a;
   document.getElementById('result').innerText = result1;
}
function calculateResult(){
    try{
      document.getElementById('result').innerText = eval(result1);
    }
    catch(err){
      result1 = "Syntax err"
      document.getElementById('result').innerText = result1;
    }
    
}
function clearDisplay(){
   result1 = 0;
   document.getElementById('result').innerText = 0 ;
//    document.getElementById('result').style.backgroundColor = "red" ;
//    document.getElementById('result').style.display = "none";

}