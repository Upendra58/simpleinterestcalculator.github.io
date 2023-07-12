function compute()
{
   var principal = document.getElementById("principal").value;

    if(principal =="" || principal<=0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus;
        return;
    }

var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value; 
var interest = principal * years * rate /100;

var dateNow = new Date();
var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);

 var resultDisplay = document.getElementById("result");
 resultDisplay.innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+yearNow+"\<br\>"

}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}