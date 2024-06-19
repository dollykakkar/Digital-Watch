    
setInterval(function(){
    const d=new Date();
    let hr=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();

    if(sec>=60){
        min++;
    
     if(min>=60){
        hr++;
    }}

    if(sec<10){
        sec='0'+sec;
    }
     if(min<10)
        {
        min='0'+min;
        }

     if(hr<10){
        hr='0'+hr;
    }


document.getElementById("hours").innerHTML=hr;
document.getElementById("min").innerHTML=min;
document.getElementById("sec").innerHTML=sec;
}




,1000);
