function displayNumber(){
 
  let p = parseFloat(prompt("enter the principal"))
  let r = parseFloat(prompt("enter the rate"))
  let n = parseInt(prompt("Enter the years"))
  let k = r/100;
  k+=1
  let m = Math.pow(k,n)
  let amt = m*p
  amt-=p
  document.write("Total Amount : "+amt)
   
}

displayNumber()