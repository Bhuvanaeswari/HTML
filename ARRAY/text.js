function setupEvents()
{
    

var content=document.getElementById("content")
var button =document.getElementById("show-more")
button.onclick=function()
{
    if (content.className==='open')
     {
         content.className="";
         button.innerHTML="SHOWMORE";
     }
     else
     {
         content.className='open';
         button.innerHTML="SHOWLESS";
     }
};
}

window.onload=function()
{
    setupEvents();
};