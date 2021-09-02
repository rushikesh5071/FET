$('document').ready(()=>{
let row=``
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/photos",
        method:"GET",
        
        success:(x)=>{
           for(let i of x){
               row+=`
               <div align="center">
               <img src="${i.thumbnailUrl}">
               <br>
               <p>Description : ${i.title}</p>
               <p>Price : ${i.id}</p>
               <button>Add to Cart</button>
               </div>


               `
           }
           $('.container').html(row)

        }
    })

})