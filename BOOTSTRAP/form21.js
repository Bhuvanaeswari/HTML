const  performapp=()=>
 {
    const a=document.forms["appform"].person.value
    const b=document.forms["appform"].address.value
    const c=document.forms["appform"].mail.value
    const d=document.forms["appform"].course.value
    const e=document.forms["appform"].c1.checked
    const f=document.forms["appform"].c2.checked
    const g=document.forms["appform"].scheme.value
  
    const h =document.forms["appform"].mobile.value
    const i =document.forms["appform"].pass.value
    const j =document.forms["appform"].cpass.value
    
    let ack=true
    if(a.length<=0)
    {
        document.getElementById("nerror").innerHTML="shouln't be empty"
        ack=false
    }
    if(b.length<=0)
    {
        document.getElementById("aerror").innerHTML="shouln't be empty"
        ack=false

    }
    if (c.length<=0)    
    {
        document.getElementById("mailerror").innerHTML="sholn't be empty"
        ack=false

    }
    if (h.length<=0)    
    {
        document.getElementById("merror").innerHTML="sholn't be empty"
        ack=false

    }
    if (i.length<=0)    
    {
        document.getElementById("passerror").innerHTML="sholn't be empty"
        ack=false

    }
    if (j.length<=0)    
    {
        document.getElementById("cpasserror").innerHTML="sholn't be empty"
        ack=false

    }




    if(d=="")
    {
        document.getElementById("selecterror").innerHTML="shouln't be empty"
        ack=false
    }

    if (f==false || e==false)
    {
        document.getElementById("courseerror").innerHTML="didn't check"
        ack=false
    }
    if (g=="")
    {
        document.getElementById("schemeerror").innerHTML="select one"
        ack=false
    }
    if(!(/^[a-zA-Z]$/).test(a))
    {
        document.getElementById("nerror").innerHTML="numerics and special charaters are not allowed"
        ack=false
    }
    if(!(/^(?=.*[0-9])(?=.+[@])(?=.+[.])[a-zA-Z0-9@._]+$/).test(c))
    {
        document.getElementById("mailerror").innerHTML="invalid email id"
        ack=false
    }
    if(!(/^[0-9]+$/).test(h))
    {
        document.getElementById("aerror").innerHTML="alphabets and special char are not allowed"
        ack=false
    }
    if(i!=j)
    {
        document.getElementById("cperror").innerHTML="password mismatch"
        ack=false
    }
    return ack
 }
