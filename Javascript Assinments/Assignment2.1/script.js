function displayNumberdowhile(){
    let i =1;
document.write("Using do-while")
document.write("<br>")
  do{
      
      
      document.write(i+" ")
      if(i % 10 == 0){
        document.write("<br>")
      }
     
      i++;

  }
  while(i != 101)
   
}
function displayWhile(){
  document.write("Using while loop")
document.write("<br>")
  let i =1;
  while(i<101){
    document.write(i+" ")
      if(i % 10 == 0){
        document.write("<br>")
      }
     
      i++;


  }
}

displayNumberdowhile()
displayWhile()