let sample=[]
const adding=()=>
{
    const temp=document.getElementById("text");
    sample.push(temp.value);
    alert(sample);

}
//const viewing=()=>
//{
 //const dummy=sample.map(nam=>nam);
 //document.writeln(dummy);
 //console.log(dummy)
 //alert(dummy)
//}

//const viewing=()=>
//{ 
 //var hi=""
 //const dummy=sample.map(function(nam)
  //  {
   //     hi+="<tr><td>"+nam+"</td></tr>"

   // });

//}
//console.log(hi)

//var pre=document.getElementById("present")
//pre.innerHTML(hi)


const viewing=()=>{
    var hi=""
    sample.map((data)=>
    {   
        hi+="<tr><td>"+data+"</td></tr>"
    })
    var t=document.getElementById("present")
    //document.write("<table align='center' style='padding: 10px 10px 10px 10px; border-radius: 10px;box-shadow: 5px 5px 5px blue;'><thead><tr><th>Elements</th></tr></thead><tbody>"+delta.map((data)=>{document.write("<tr><td>"+data+"</td></tr>")})+"</tbody></table>")
    t.innerHTML="<table align='center' style='padding: 10px 10px 10px 10px; border-radius: 10px;box-shadow: 5px 5px 5px blue;'><thead><tr><th>Elements</th></tr></thead><tbody>"+hi+"</tbody></table>"
}