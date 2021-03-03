function compute()
{
   var p = document.getElementById("principal").value;
   if(p==""){
   principal.focus();
   return flase;
   }
   
   var r= document.getElementById("rate").value;
    if(r==""){
   rate.focus();
   return flase;
   }
    var t=document.getElementById("years").value;
     if(t==""){
   years.focus();
   return flase;
   }
    
    var x = p*r*t/100;
    alert("The money you will earn as interest is :"+x);
}
        
