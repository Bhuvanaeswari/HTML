


function tournament(id,nam,gamnam,cat,tourdate,ven,regfee,ldateofreg,awa,tp,win)
{
    this.id=id
    this.tourname=nam
    this.gamename=gamnam
    this.category=cat
    this.tourdate=tourdate
    this.venue=ven
    this.regfee=regfee
    this.ldateofreg=ldateofreg
    this.awards=awa
    this.totalpar=tp
    this.winners=win
    this.show=show
}
function show()
{
    with(this)
{
  return(id+" "+tourname+" "+gamename+" "+category+" "+tourdate+" "+venue+" "+regfee+" "+ldateofreg+" "+awards)


}
}

function perform()
{
    this.tour=new Array()
    this.display=display
    this.add=add
    this.bysearch=bysearch
    this.byupdate=byupdate

}

function display()
{
    with(this)

    { 
        tour.map(function(data)
        {
            alert(data.show())
        });

    }

}
function add(tdata)
{
    with(this)
    {
       tour.push(tdata) 

    }
}
function bysearch()
{

}
function byupdate()
{}

