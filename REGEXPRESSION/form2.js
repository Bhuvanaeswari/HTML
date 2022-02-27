const perform=()=>
{
    const a=document.forms["valley"].fname.value
    const b=document.forms["valley"].lname.value
    const c=document.forms["valley"].dat.value
    const d=document.forms["valley"].gender.value
    const e=document.forms["valley"].pass.value
    const f=document.forms["valley"].c1.checked
    const g=document.forms["valley"].c2.checked
 
    let ack=true
    if (a.length<=0)
    {
        document.getElementById("ferror").innerHTML="first name shouln't be empty"
        ack=false

    }
    if (b.length<=0)
    {
       document.getElementById("lerror").innerHTML="last name shouln't be empty"
       ack=false
    }
    if(c.length<=0)
    {
      document.getElementById("doberror").innerHTML="choose ur date of birth"
      ack=false
    }
    if(d=="")
    {
       document.getElementById("gerror").innerHTML="gender must be selected"
       ack=false
    }
    if(e.length<=0)
    {document.getElementById("perror").innerHTML="password shouln't be empty"
      ack=false
    }
    if(f!=true|| g!=true)
    {
        ack=false
    }
    //if(!(/^[a-zA-Z]/).test(a) && !(/^[a-zA-Z]/).test(b))
     rg1= new RegExp(["^[0-9]+$",'g'])
     
    if( !(rg1.test(a)) && !(rg1.test(b)))
     
    {
       document.getElementById("ferror").innerHTML="numerics are not allowed"
       document.getElementById("lerror").innerHTML="numerics are not allowed"
       ack=false
    }
    if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*()<>,./])[A-Za-z0-9!@#$%^&*()<>,./]+$/).test(e))
    {
      document.getElementById("perror").innerHTML="password more than 7chars are not allowed specialchar[@#$!*]are allowed"
      ack=false
    }



    return ack





}