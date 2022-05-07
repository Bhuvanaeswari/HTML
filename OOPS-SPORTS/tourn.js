const tournament= [{id:001,name:"FIFA",sports:"football",category:"juniors",tour_date:"31-4-2022",venue:"Jawaharlal Stadium,Chennai",reg_fee:1200,l_date_reg:"30-3-3022",awards:2000,t_par_count:0,winners:"empty"},
                    {id:002,name:"CSK",sports:"cricket",category:"sub-juniors",tour_date:"31-5-2022",venue:"Ellis Stadium,Coimbatore",reg_fee:1500,l_date_reg:"30-4-3022",awards:5000,t_par_count:0,winners:"empty"},
                    {id:003,name:"TENAC",sports:"tennis",category:"seniors",tour_date:"31-6-2022",venue:"IIT Tennis Court,Madurai",reg_fee:1800,l_date_reg:"30-5-3022",awards:7000,t_par_count:0,winners:"empty"}];
//const tournament= [[001,"FIFA","football","juniors","31-4-2022","JAWAHARLAL STADIUM,chennai",1200,"30-3-3022",2000,0,"empty"],
//                 [002,"CSK","cricket","sub-juniors","31-5-2022","ELLIS STADIUM,coimbatore",1500,"30-4-3022",5000,0,"empty"],
//                 [003,"TENAC","tennis","seniors","31-6-2022","IIT TENNIS COURT,Madurai",1800,"30-5-3022",7000,0,"empty"]];

console.log(typeof(tournament))

tournament.forEach(function(data)
{
    console.log(data);
});

const creating=()=>
{
const inpid=document.getElementById("tourid").value
alert(inpid)
alert(typeof(inpid))
const inpnam=document.getElementById("tournam").value
const gamenam=document.getElementById("gamenam").value
const category=document.getElementById("category").value
const tourdate=document.getElementById("tourdob").value
const venue=document.getElementById("venue").value
const regfee=document.getElementById("regfee").value
const lregdate=document.getElementById("lregdate").value
const awards=document.getElementById("awards").value
let ln=tournament.length
let object={id:inpid,name:inpnam,sports:gamenam,category:category,tour_date:tourdate,venue:venue,reg_fee:regfee,l_date_reg:lregdate,awards:awards,t_par_count:0,winners:"empty"}

tournament.push(object)
console.log(tournament[2])
tournament.map((data)=>{console.log(data.id)})
console.log(tournament.id)

//tournament.push(inpid,inpnam,gamenam,category,tourdate,venue,regfee,lregdate,awards,0,"empty")
//tournament.push(inpnam)
//tournament.push(gamenam)
//tournament.push(category)
//tournament.push(tourdate)
//tournament.push(venue)
//tournament.push(regfee)
//tournament.push(lregdate)
//tournament.push(awards)

tournament.forEach(function(data)
{
    console.log(data);
});
 
}
function viewing()
{tournament.forEach(function(data)
    {
        console.log(data);
    });
  let collect1=""
  tournament.forEach(function(data){ return collect1+=data.id+"<br/>"}) 
  console.log(collect1)
  let collect2=""
  tournament.forEach(function(data){return collect2+=data.name+"<br/>"})
  console.log(collect2)
  let collect3=""
  tournament.map((data)=>{return collect3+=data.sports+"<br/>"})
  console.log(collect3)
  let collect4=""
  tournament.map((data)=>{return collect4+=data.category+"<br/>"})
  let collect5=""
  tournament.map((data)=>{return collect5+=data.tour_date+"<br/>"})
  let collect6=""
  tournament.map((data)=>{return collect6+=data.venue+"<br/>"})
  let collect7=""
  tournament.map((data)=>{return collect7+=data.reg_fee+"<br/>"})
  let collect8=""
  tournament.map((data)=>{return collect8+=data.l_date_reg+"<br/>"})
  let collect9=""
  tournament.map((data)=>{return collect9+=data.awards+"<br/>"})
  let play=document.getElementById("template")  
  play.innerHTML="<table border='5px' cell padding='1px' style='text-align:center'><thead><tr><th>ID</th><th>NAME</th><th>SPORTS</th><th>CATEGORY</th><th>TOUR_DATE</th><th>VENUE</th><th>REG_FEE</th><th>L_DATE_REG</th><th>AWARDS</th></tr></thead><tbody>"+"<td>"+collect1+"</td>"+"<td>"+collect2+"</td>"+"<td>"+collect3+"</td>"+"<td>"+collect4+"</td>"+"<td>"+collect5+"</td>"+"<td>"+collect6+"</td>"+"<td>"+collect7+"</td>"+"<td>"+collect8+"</td>"+"<td>"+collect9+"</td>"+"</tbody></table>"

}

function searching()
{
    {tournament.forEach(function(data)
        {
            console.log(data);
        });
      let collect1=""
      tournament.forEach(function(data){ return collect1+=data.id+"<br/>"}) 
      console.log(collect1)
      let collect2=""
      tournament.forEach(function(data){return collect2+=data.name+"<br/>"})
      console.log(collect2)
      let collect3=""
      tournament.map((data)=>{return collect3+=data.sports+"<br/>"})
      console.log(collect3)
      let collect4=""
      tournament.map((data)=>{return collect4+=data.category+"<br/>"})
      let collect5=""
      tournament.map((data)=>{return collect5+=data.tour_date+"<br/>"})
      let collect6=""
      tournament.map((data)=>{return collect6+=data.venue+"<br/>"})
      let collect7=""
      tournament.map((data)=>{return collect7+=data.reg_fee+"<br/>"})
      let collect8=""
      tournament.map((data)=>{return collect8+=data.l_date_reg+"<br/>"})
      let collect9=""
      tournament.map((data)=>{return collect9+=data.awards+"<br/>"})
      let play=document.getElementById("template")  
      play.innerHTML="<table border='5px' cell padding='1px' style='text-align:center'><thead><tr><th>ID</th><th>NAME</th><th>SPORTS</th><th>CATEGORY</th><th>TOUR_DATE</th><th>VENUE</th><th>REG_FEE</th><th>L_DATE_REG</th><th>AWARDS</th><th>T_PAR_COUNT</th><th>WINNERS</th></tr></thead><tbody>"+"<td>"+collect1+"</td>"+"<td>"+collect2+"</td>"+"<td>"+collect3+"</td>"+"<td>"+collect4+"</td>"+"<td>"+collect5+"</td>"+"<td>"+collect6+"</td>"+"<td>"+collect7+"</td>"+"<td>"+collect8+"</td>"+"<td>"+collect9+"</td>"+"</tbody></table>"
    
 }}