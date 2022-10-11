

function validateForm() {
    let fName = document.forms["myform"]["fname"].value;
    let lName = document.forms["myform"]["lname"].value;
    let email = document.forms["myform"]["email"].value;
    let inf = document.forms["myform"]["inf"].value; 
    // let k = document.getElementsByName("section");
    let checkbox = document.getElementsByName("section[]").value;
    if (fName == "") 
    {
      alert("Pole imię jest puste");
      return false;
    }
    else if (lName == "")
    {
        alert("Pole nazwisko jest puste");
        return false;
    }
    else if (email == "")
    {
        alert("Pole email jest puste");
        return false;
    }
    else if(inf == "")
    {
        alert("Napisz coś o sobie :D");
        return false;
    }
    var f = document.getElementsByName('section');
    var v ='';
    for(var i = 0; i < f.length; i++){
    if(f[i].checked){
        v = v+' '+ f[i].value;
    }
}
if (v=='') 
{
    alert("Nie wybrałeś sekcji do której chcesz dołączyć.");
    return false;
}
else
    alert("Formularz wypełniony prawidłowo");
    return false;
  }

