function resources(n,s,l,c)
{
    this.name=n
    this.skill=s
    this.location=l
    this.commercials=c
    this.show=show
}

function show()
{
    with(this)
    {
        hey=""
        skill.map((data)=>{hey+=data+" "})
        return "resources details : "+name+" , "+location+" , "+commercials+" , "+hey
    }
}

function manage()
{
    this.team=new Array()
    this.display=display
    this.add=add
    this.bysearch=bysearch
    this.byupdate=byupdate

}

function display()
{
    with(this)
    {
        team.map((obj)=>{alert(obj.show())})
        //     (or)
        //team.map(function(obj)
        //{
          //  alert(obj.show())
        //})
   }
}
 
function add(res)
{
   with(this)
   {
       team.push(res)
       alert(res.name+" resources added")    
   }
}

function bysearch()
{
    with(this)
    {
        var wish= prompt("Tell us ur wish to search (name,skill,location,commercials) : ")
        switch (wish)
        {
            case "name":
                var namuser = prompt("tell us name to be search : ");
                console.log(namuser)
                console.log(typeof(namuser))
                team.map((data)=>{if (data.name==namuser) 
                                     alert(data.show())})
                break                      
            
            case "location":
                var locuser=prompt("tell us location to be search : ")
                team.map((data)=>{if (data.location==locuser)
                                      alert(data.show())})
                break                      
            case "commercials":
                 var comuser=prompt("tell us ur commercial value should be in the form (>,<,=) : ")
                 switch (comuser)
                 {
                     case ">":
                         var val=prompt("tell us the value to be search : ")
                         team.map((data)=>{ if (data.commercials>val)
                                                alert(data.show())})
                         break                       
                     case "<":
                          var val=prompt("Tell us value to be search : ")
                          team.map((data)=>{if (data.commercials<val)
                                                alert(data.show())})
                          break                      
                     case "=": 
                         var val=prompt("Tell us value to be searh : ")  
                         team.map((data)=>{if (data.commercials==val)
                                              alert(data.show())})
                         break
            
                         default:
                          break;       

                 }
            case  "skill":
                    var skillser=prompt("Tell us skill to be search : ")
                    const tskill=team.filter(function(data)
                    {   
                        console.log(data.skill)
                        temp=data.skill
                        for(let i=0;i<temp.length;i++)
                        {
                            console.log(temp[i])
                            if ((temp[i])==skillser)
                                alert(data.show()) 
                        }
                    });
                    break
            default:
                break;
        }
    }

}

function byupdate()
{
   with(this)
   {
       var want=prompt("Tell us which u want to update (name,skill,location,commercials) : ")
       switch(want)
       {
           case "name":
               var n=prompt("Tell us old Name : ") 
               const tname=team.filter(function(data)
               {   
                  if (data.name==n)
                   {
                      var newnam = prompt("Tell us new name : ")
                      data.name=newnam
                      alert(data.show())                   
                   }
                });
                break
           case "location":
               var loc=prompt("Tell us name whose location to be changed : ")
               const tl=team.filter(function(data)
               {
                   if (data.name==loc)
                   {
                    var nl=prompt("Tell us new location : ")
                    data.location=nl
                    alert(data.show())
                   }
               });
               break           
           case "commercials":
               var com =prompt("Tell us name whom Basicpay to be changed : ")
               const tcom=team.filter(function(data)
               {
                   if (data.name==com)
                   {
                    var nc=prompt("Tell us new commercials : ")
                    data.commercials=nc
                    alert(data.show())
                   }
               });
               break           
           case "skill" :  
                break
           default:
              break
      
        }
    }
}