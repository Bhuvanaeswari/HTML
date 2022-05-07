const initial=()=>
{
    participants={"name":["rithika","yashika","anush"],"age":[30,12,23],"weight":[55,34,44],"contact":[995283040,986504567,890789567],"tournament":["football","cricket","tennis"],"score":[50,120,30]}
    
    localStorage.setItem("participants",JSON.stringify(participants))
      
}

const adding=()=>
{
    var inter=localStorage.getItem("participants")
    console.log(inter)
    var temp=JSON.parse(inter)
    
    console.log(temp.name,temp.age,temp.weight,temp.contact,temp.tournament)
    const inpname=document.getElementById("playnam").value
    const inpage=document.getElementById("playage").value
    const inpweight=document.getElementById("playweight").value
    const inpcon=document.getElementById("playcontact").value
    const inptourn=document.getElementById("playtourn").value
    const inpscore=document.getElementById("playscore").value
    console.log(inpname)
    temp["name"].push(inpname)
    temp["age"].push(inpage)
    temp["weight"].push(inpweight)
    temp["contact"].push(inpcon)
    temp["tournament"].push(inptourn)
    temp["score"].push(inpscore)

    localStorage.setItem("participants",JSON.stringify(temp))
    alert("new participants created")
  
}

const viewing=()=>
{
    var t=localStorage.getItem("participants")
    var temp=JSON.parse(t)
    console.log(temp)
    console.log(temp["name"])
    var len=temp["tournament"].length
    console.log(temp.tournament)
    var cricketcount=0
    var footballcount=0
    var tenniscount=0
    for (i=0;i<len;i++)
     {  
        
        if(temp["tournament"][i]=='cricket')
        {
            cricketcount+=1
                               
        }
        else if(temp["tournament"][i]=='football')
        {
            footballcount+=1
        }
        else if(temp["tournament"][i]=='tennis')
        {
            tenniscount+=1
        }

    }
    document.getElementById("cricketcount").value=cricketcount
    document.getElementById("footballcount").value=footballcount
    document.getElementById("tenniscount").value=tenniscount

    console.log(cricketcount)
    console.log(tenniscount)
    console.log(footballcount)

   
    let collect1=""
    let collect2=""
    let collect3=""
    let collect4=""
    let collect5=""
    let collect6=""
    //const namemap=temp["name"].map((data)=>{ return collect1+="<td>"+data+"</td>"})
   // const agemap=temp["age"].map((data)=>{return collect2+="<td>"+data+"</td>"})
   // const weightmap=temp["weight"].map((data)=>{return collect3+="<td>"+data+"</td>"})
   // const contactmap=temp["contact"].map((data)=>{return collect4+="<td>"+data+"</td>"})
   // const tournmap=temp["tournament"].map((data)=>{return collect5+="<td>"+data+"</td>"})

    const namemap=temp["name"].map((data)=>{ return collect1+=data+"<br/>"})
    const agemap=temp["age"].map((data)=>{return collect2+=data+"<br/>"})
    const weightmap=temp["weight"].map((data)=>{return collect3+=data+"<br/>"})
    const contactmap=temp["contact"].map((data)=>{return collect4+=data+"<br/>"})
    const tournmap=temp["tournament"].map((data)=>{return collect5+=data+"<br/>"})
    const scoremap=temp["score"].map((data)=>{return collect6+=data+"<br/>"})


    var place=document.getElementById("template")
    //place.innerHTML="<table  border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th></tr></thead><tbody>"+collect1+"<tr>"+collect2+"<tr>"+collect3+"<tr>"+collect4+"<tr>"+collect5+"<tr>"+"</tbody></table>"
   
    //place.innerHTML="<table border='5px' cell padding='1px' style='text-align:center'><thead><tr><th>ID</th><th>NAME</th><th>SPORTS</th><th>CATEGORY</th><th>TOUR_DATE</th><th>VENUE</th><th>REG_FEE</th><th>L_DATE_REG</th><th>AWARDS</th></tr></thead><tbody>"+"<td>"+collect1+"</td>"+"<td>"+collect2+"</td>"+"<td>"+collect3+"</td>"+"<td>"+collect4+"</td>"+"<td>"+collect5+"</td>"+"<td>"+collect6+"</td>"+"<td>"+collect7+"</td>"+"<td>"+collect8+"</td>"+"<td>"+collect9+"</td>"+"</tbody></table>"
   
    place.innerHTML="<table  border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th><th>SCORE</th></tr></thead><tbody> <tr>"+"<td>"+collect1+"</td>"+"<td>"+collect2+"</td>"+"<td>"+collect3+"</td>"+"<td>"+collect4+"</td>"+"<td>"+collect5+"</td>"+"<td>"+collect6+"</td>"+"</tr></tbody></table>"
   
   
   
   
    // place.innerHTML="<table border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th></tr></thead><tbody>"+"<tr>"+collect1+collect2+collect3+collect4+collect5+"</tr>"+"</tbody></table>"
   //place.innerHTML="<table border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th></tr></thead><tbody>"+collect1+collect2+collect3+collect4+collect5+"</tbody></table>"
   
   //place.innerHTML="<table border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th></tr></thead><tbody>"+"<td>"+collect1+"</td>"+collect2+""+collect3+""+collect4+""+collect5+"</tbody></table>"
   document.getElementById("cricketcount").value=cricketcount
   document.getElementById("footballcount").value=footballcount
   document.getElementById("tenniscount").value=tenniscount

}


const removing=()=>
{
    var t=localStorage.getItem("participants")
   var m=JSON.parse(t)
   var len=m["name"].length
   var playdel=document.getElementById("playdel").value
   console.log(playdel)
   for (i=0;i<len;i++)
    {
        if (m["name"][i]==playdel)
         {break}
    }
    //playdel=i
    play=i
    console.log(play)
    m["name"]=m["name"].filter((data)=>{return data!=m["name"][play]})
    m["age"]=m["age"].filter((data)=>{return data!=m["age"][play]})
    m["weight"]=m["weight"].filter((data)=>{return data!=m["weight"][play]})
    m["contact"]=m["contact"].filter((data)=>{return data!=m["contact"][play]})
    m["tournament"]=m["tournament"].filter((data)=>{return data!=m["tournament"][play]})
    m["score"]=m["score"].filter((data)=>{return data!=m["score"][play]})

    console.log(m)
    localStorage.setItem("participants",JSON.stringify(m))
}

const btnclear=()=>
{
    document.getElementById("playnam").value=""
    document.getElementById("playage").value=""
    document.getElementById("playweight").value=""
    document.getElementById("playcontact").value=""
    document.getElementById("playtourn").value=""
    document.getElementById("playdel").value=""
    document.getElementById("playscore").value=""

}

const searching=()=>
{
    var x=localStorage.getItem("participants")
    var y=JSON.parse(x)
    var playdel=document.getElementById("playdel").value
    let collect1=""
    let collect2=""
    let collect3=""
    let collect4=""
    let collect5=""
    let collect6=""
    
    var lg=y["name"].length
    for(i=0;i<lg;i++)
    {
        if (y["name"][i]==playdel)
        {
            break
        }
    }    
      const pos=i
    var place=document.getElementById("template")
    collect1+=y["name"][pos]+"<br/>"
    collect2+=y["age"][pos]+"<br/>"
    collect3+=y["weight"][pos]+"<br/>"
    collect4+=y["contact"][pos]+"<br/>"
    collect5+=y["tournament"][pos]+"<br/>"
    collect6+=y["score"][pos]+"<br/>"


    //collect1="<td>"+y["name"][pos]+"</td>"
    //collect2="<td>"+y["age"][pos]+"</td>"
    //collect3="<td>"+y["weight"][pos]+"</td>"
    //collect4="<td>"+y["contact"][pos]+"</td>"
    //collect5="<td>"+y["tournament"][pos]+"</td>"


    //place.innerHTML="<table  border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th><th>ACTION</th></tr></thead><tbody>"+collect1+collect2+collect3+collect4+collect5+"<td>"+"<button onclick=editing()>EDIT</button>"+"</td></tbody></table>"
    place.innerHTML="<table  border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th><th>SCORE</th><th>ACTION</th></tr></thead><tbody><tr>"+"<td>"+collect1+"</td>"+"<td>"+collect2+"</td>"+"<td>"+collect3+"</td>"+"<td>"+collect4+"</td>"+"<td>"+collect5+"</td>"+"<td>"+collect6+"</td>"+"<td>"+"<button onclick=editing()>EDIT</button>"+"</td></tr></tbody></table>"
    document.getElementById("playnam").value=y["name"][pos]
    document.getElementById("playage").value=y["age"][pos]
    document.getElementById("playweight").value=y["weight"][pos]
    document.getElementById("playcontact").value=y["contact"][pos]
    document.getElementById("playtourn").value=y["tournament"][pos]
    document.getElementById("playscore").value=y["score"][pos]

    //var place2=document.getElementById("template2")
    //place2.innerHTML="<button onclick=editing()>EDIT</button>"
   


}

function editing()
{
    var p=localStorage.getItem("participants")
    var q=JSON.parse(p)
    const v1=document.getElementById("playnam").value
    const v2=document.getElementById("playage").value
    const v3=document.getElementById("playweight").value
    const v4=document.getElementById("playcontact").value
    const v5=document.getElementById("playtourn").value
    const v6=document.getElementById("playscore").value
    var playdel=document.getElementById("playdel").value

    const le=q["name"].length
    for(i=0;i<le;i++)
    {
        if(q["name"][i]==playdel)
        {
            break
        }
    }
    alert(i)
    pos=i
    console.log(pos)
    q["name"][pos]=v1
    q["age"][pos]=v2
    q["weight"][pos]=v3
    q["contact"][pos]=v4
    q["tournament"][pos]=v5
    q["score"][pos]=v6
    localStorage.setItem("participants",JSON.stringify(q))
    alert("player details has updated")

 

}

const winning=()=>
{
    var t=localStorage.getItem("participants")
    var temp=JSON.parse(t)
    console.log(temp)
    console.log(temp["name"])
    var len=temp["tournament"].length
    console.log(temp.tournament)
    var cricketcount=0
    var footballcount=0
    var tenniscount=0
    var cricketwinner=""
    var footballwinner=""
    var tenniswinner=""
    var highcricket=0
    var highfootball=0
    var hightennis=0


    for (i=0;i<len;i++)
    {  
       
       if(temp["tournament"][i]=='cricket')
       {
           cricketwinner=temp["name"][i]
           highcricket=temp["score"][i]
           break
       }  
    }  
    for (i=0;i<len;i++)
    {      
       if(temp["tournament"][i]=='football')
       {
           footballwinner=temp["name"][i]
           highfootball=temp["score"][i]
           break
       }   
     }
     for (i=0;i<len;i++)
    {      
       if(temp["tournament"][i]=='tennis')
       {
           tenniswinner=temp["name"][i]
           hightennis=temp["score"][i]
           break
       }
   }

   console.log(cricketwinner)
   console.log(footballwinner)
   console.log(tenniswinner)
 
   console.log(highcricket)
   console.log(highfootball)
   console.log(hightennis)




   
    for (i=0;i<len;i++)
    { 
        
        if(temp["tournament"][i]=='cricket')
        {
            cricketcount+=1
            console.log(temp["name"][i])
                     
            if ( temp["score"][i]>=highcricket)
            { 
                cricketwinner=temp["name"][i]
            }
                        
        }
        else if(temp["tournament"][i]=='football')
        {
            footballcount+=1
            console.log(temp["name"][i])
            if(temp["score"][i]>=highfootball)
            {
                footballwinner=temp["name"][i]
            }
        }
        else if(temp["tournament"][i]=='tennis')
        {
            tenniscount+=1
            if(temp["score"][i]>=hightennis)
            {
                tenniswinner=temp["name"][i]
            }
        }

    }
    document.getElementById("cricketcount").value=cricketcount
    document.getElementById("footballcount").value=footballcount
    document.getElementById("tenniscount").value=tenniscount

    console.log(cricketcount)
    console.log(tenniscount)
    console.log(footballcount)

    document.getElementById("cricketwinner").value=cricketwinner
    document.getElementById("footballwinner").value=footballwinner
    document.getElementById("tenniswinner").value=tenniswinner

    console.log(cricketwinner)
    console.log(footballwinner)
    console.log(tenniswinner)

    let collect1=""
    let collect2=""
    let collect3=""
    let collect4=""
    let collect5=""
    let collect6=""
    //const namemap=temp["name"].map((data)=>{ return collect1+="<td>"+data+"</td>"})
   // const agemap=temp["age"].map((data)=>{return collect2+="<td>"+data+"</td>"})
   // const weightmap=temp["weight"].map((data)=>{return collect3+="<td>"+data+"</td>"})
   // const contactmap=temp["contact"].map((data)=>{return collect4+="<td>"+data+"</td>"})
   // const tournmap=temp["tournament"].map((data)=>{return collect5+="<td>"+data+"</td>"})

    const namemap=temp["name"].map((data)=>{ return collect1+=data+"<br/>"})
    const agemap=temp["age"].map((data)=>{return collect2+=data+"<br/>"})
    const weightmap=temp["weight"].map((data)=>{return collect3+=data+"<br/>"})
    const contactmap=temp["contact"].map((data)=>{return collect4+=data+"<br/>"})
    const tournmap=temp["tournament"].map((data)=>{return collect5+=data+"<br/>"})
    const scoremap=temp["score"].map((data)=>{return collect6+=data+"<br/>"})


    var place=document.getElementById("template")
    //place.innerHTML="<table  border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th></tr></thead><tbody>"+collect1+"<tr>"+collect2+"<tr>"+collect3+"<tr>"+collect4+"<tr>"+collect5+"<tr>"+"</tbody></table>"
   
    //place.innerHTML="<table border='5px' cell padding='1px' style='text-align:center'><thead><tr><th>ID</th><th>NAME</th><th>SPORTS</th><th>CATEGORY</th><th>TOUR_DATE</th><th>VENUE</th><th>REG_FEE</th><th>L_DATE_REG</th><th>AWARDS</th></tr></thead><tbody>"+"<td>"+collect1+"</td>"+"<td>"+collect2+"</td>"+"<td>"+collect3+"</td>"+"<td>"+collect4+"</td>"+"<td>"+collect5+"</td>"+"<td>"+collect6+"</td>"+"<td>"+collect7+"</td>"+"<td>"+collect8+"</td>"+"<td>"+collect9+"</td>"+"</tbody></table>"
   
    place.innerHTML="<table  border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th><th>SCORE</th></tr></thead><tbody> <tr>"+"<td>"+collect1+"</td>"+"<td>"+collect2+"</td>"+"<td>"+collect3+"</td>"+"<td>"+collect4+"</td>"+"<td>"+collect5+"</td>"+"<td>"+collect6+"</td>"+"</tr></tbody></table>"
   
   
   
   
    // place.innerHTML="<table border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th></tr></thead><tbody>"+"<tr>"+collect1+collect2+collect3+collect4+collect5+"</tr>"+"</tbody></table>"
   //place.innerHTML="<table border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th></tr></thead><tbody>"+collect1+collect2+collect3+collect4+collect5+"</tbody></table>"
   
   //place.innerHTML="<table border='5px',style='text-align:center'><thead><tr><th>NAME</th><th>AGE</th><th>WEIGHT</th><th>CONTACT NO</th><th>TOURNAMENT</th></tr></thead><tbody>"+"<td>"+collect1+"</td>"+collect2+""+collect3+""+collect4+""+collect5+"</tbody></table>"
   document.getElementById("cricketcount").value=cricketcount
   document.getElementById("footballcount").value=footballcount
   document.getElementById("tenniscount").value=tenniscount

}

