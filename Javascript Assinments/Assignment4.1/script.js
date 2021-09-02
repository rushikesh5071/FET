var a =[]

function add(){
if(a.length <4){

    var n = document.querySelector("#name").value
    a.push(n)

}

console.log(a)
}
function display(){
document.write("List of Students :")
document.write("<br>")
document.write("<hr>")
document.write("<br>")
    for(let i of a){

        document.write(i)
        document.write("<br>")


    }
}