const perform=()=>
{  
    const c=document.forms["passportseva"].inpname.value
    const d=document.forms["passportseva"].surname.value
    const e=document.forms["passportseva"].dob.value
    const f=document.forms["passportseva"].email.value
    const g=document.forms["passportseva"].yesno.value
    const h=document.forms["passportseva"].loginid.value
    const i=document.forms["passportseva"].passwordid.value
    const j=document.forms["passportseva"].cpassword.value
    const k=document.forms["passportseva"].hint.value
    const l=document.forms["passportseva"].hintans.value
    const m=document.forms["passportseva"].enter.value
    const n=document.forms["passportseva"].empty.value
   
    let ack=true
    
    if(c.length<=0)
    {
        document.getElementById("gerror").innerHTML="not  nnnnnselected"
        ack=false

    }
    if(d.length<=0)
    {
        document.getElementById("serror").innerHTML="not selected"
        ack=false

    }
    if (e == "")
    { 
        document.getElementById("doberror").innerHTML="not selected"
        ack=false

    }
    if(f.length<=0)
    {
        document.getElementById("emailerror").innerHTML="not selected"
        ack=false

    }
    if( g =="")
    {
        document.getElementById("doyouerror").innerHTML="not selected"
        ack=false

    }
    if(h.length<=0)
    {
        document.getElementById("loginerror").innerHTML="not selected"
        ack=false

    }
    if(i.length<=0)
    { 
        document.getElementById("passworderror").innerHTML="not selected"
        ack=false

    }
    if(j.length<=0)
    { 
        document.getElementById("cperror").innerHTML="not selected"
        ack=false

    }
    if(k == "")
    {
        document.getElementById("hinterror").innerHTML="not selected"
        ack=false

    }
    if(l.length<=0)
    { 
        document.getElementById("hintanserror").innerHTML="not selected"
        ack=false

    }
    if(m.length<=0)
    { 
        document.getElementById("entererror").innerHTML="not selected"
        ack=false

    }
    if (n.length<=0)
    {
        document.getElementById("caperror").innerHTML="not selected"
        ack=false

    }
    //rg=new RegExp(["^[0-9]+$",'g'])
    if (!(/^[a-zA-Z]$/).test(c))
    {
        
        
        document.getElementById("gerror").innerHTML="Numerics are not allowed"
        ack=true

    }
    if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*()<>,.:])[a-zA-Z0-9@#$%^&*()<>,.:]+$/).test(i))
    {
        document.getElementById("passworderror").innerHTML="wrong password"
        ack=true
    }
    if(!(/^(?=.*[0-9])(?=.+[@._])[a-zA-Z0-9@._]+$/).test(f))
    {
        document.getElementById("emailerror").innerHTML="wrong email"
        ack=true
    }
    if (i!=j)
    {
        alert(i)
        alert(j)
        document.getElementById("cperror").innerHTML="passwordmismatch"
        ack=true
    }
    if(m!=n)
    {
        alert(m)
        alert(n)
        document.getElementById("caperror").innerHTML="wrong captcha"
        ack=true
    }
    return ack

}
//const a =document.forms["passportseva"].register.value
//const b=document.forms["passportseva"].location.value

// if(a == "")
   //{
    //   alert(a)
    //   document.getElementById("rerror").innerHTML="not selected"
    //   ack=false
  // }
  //if(b == " ")
    //{ 
    //    document.getElementById("perror").innerHTML="not selected"
    //    ack=false

    //}