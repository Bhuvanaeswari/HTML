const begin=()=>
{
    hey={"foods":["dosa","idly"]}
    //var t=JSON.stringify(hey) 
    //console.log(t) //{"foods":["dosa","idly"]}
    localStorage.setItem("menu",JSON.stringify(hey))
    alert("menu item initialied")
}

const adding=()=>
{   
    var yet=localStorage.getItem("menu")
    console.log(yet)
    alert(yet+" menu items") //{"foods" : ["dosa","idly"]}
    alert(yet["foods"])//undefined
    var temp=JSON.parse(yet)
    alert(temp)//[object object]
    console.log(temp)//foods: (3) ['dosa', 'idly', ''] [[Prototype]]: Object
    alert(temp["foods"])//dosa,idly
    hi=document.getElementById("inpitem").value
    temp["foods"].push(hi)
    alert(temp["foods"]+ " after push")
    localStorage.setItem("menu",JSON.stringify(temp))
    alert(hi+ "  has added to menu")
}

const viewing=()=>
{  var t=localStorage.getItem("menu")
   var onet=JSON.parse(t)
   // var onet=JSON.parse(localStorage.getItem("menu"))
   
   console.log(t) //{"foods":["dosa","idly"]}
   console.log(onet)//foods: (2) ['dosa', 'idly']
   
   let collect=""
   const onetmap=onet["foods"].map((data)=>{return collect+="<tr><td>"+data+"</td></tr>"})
   console.log(onetmap)//0: "<tr><td>dosa</td></tr>" 1: "<tr><td>dosa</td></tr><tr><td>idly</td></tr>"
   console.log(collect)//<tr><td>dosa</td></tr><tr><td>idly</td></tr>
   
   var place=document.getElementById("template")
   place.innerHTML="<table border='5px' style='text-align:center';><thead><tr><th> HOTEL MENU </th></tr></thead><tbody>"+collect+"</body></table>"
}

const removing=()=>
{
    alert(localStorage.getItem("menu"))
    var inp = document.getElementById("inpitem").value //give item name

    console.log(inp)
    let tpar=JSON.parse(localStorage.getItem("menu"))
    var len=tpar["foods"].length
    console.log(len)
    for(i=0;i<len;i++)
    {   console.log("hi")
        if (tpar["foods"][i]==inp){break}
    }
    inp=i
    tpar["foods"]=tpar["foods"].filter((data,pos)=>{ return data!==tpar["foods"][inp]})
    
    
    console.log(tpar)//0: "dosa" 1: "idly"
    localStorage.setItem("menu",JSON.stringify(tpar))

}

//console.log(tpar["foods"][1])