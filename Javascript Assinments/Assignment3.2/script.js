var companyName="Cybage Software Pvt Ltd";
var a =prompt("enter the character")
var b = companyName.indexOf(a)
if( b != -1){
    document.write("character "+a+" is  found at  index "+b)
}
else{

    document.write("character "+a+" is not found")
}
document.write("<br>")
var c = companyName.substring(0,15)
document.write("Cybage Software Pvt Ltd is popularly known as "+c)
document.write("<br>")
document.write(companyName.toLowerCase())
document.write("<br>")
document.write(companyName.toUpperCase())