function calcOpt(){
  var argSelection=0;
  
  if(document.ConsultForm.Consulting[0].checked==true)
    argSelection = 1000;
 
 else if(document.ConsultForm.Consulting[1].checked==true)
    argSelection = 500;
  
 else
   argSelection = 100;

  calcSubTotal(argSelection);
}

function calcSubTotal(parmSelection){

  var argsubTotal = parmSelection;

  var argdiscountAmt = argsubTotal*0.05;
  
  var argvatAmt = (argsubTotal-argdiscountAmt)*0.2;

  var argtotalPrice = argsubTotal - argdiscountAmt + argvatAmt;

  calcDisplay(argsubTotal, argdiscountAmt, argvatAmt, argtotalPrice);
}

function calcDisplay(parmsubtotal, parmdiscountAmt, parmvatAmt, parmtotalPrice){
  alert("Base price: $"+parmsubtotal +"\nDiscount (5%): $"+parmdiscountAmt +"\nVAT (20%): $"+parmvatAmt +"\nTotal Price: $"+parmtotalPrice);

  sharedata();
}

function sharedata(){
  confirm("Would you like to share this quote to our database? We will not save this quote if you press 'cancel'.");
}
