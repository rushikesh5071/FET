let td = new Date()
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mond";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thurs";
weekday[5] = "Fri";
weekday[6] = "Sat";
document.write(weekday[td.getDay()] +" " +td.toLocaleString('default', { month: 'short' })+" "+td.getUTCDate()+" "+td.getFullYear()+" "+td.getHours()+":"+td.getMinutes()+":"+td.getSeconds())
if(td.getHours() >=12){
    document.write("PM")
    if(td.getHours()<=17){
        document.write("<br>")
        document.write("Good Afternoon")
    }
    else{
        document.write("<br>")
        document.write("Good Evening")
    }
    
}
else{
    document.write("AM")
    document.write("<br>")
    document.write("Good Morning")
}

