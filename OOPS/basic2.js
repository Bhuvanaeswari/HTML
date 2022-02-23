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
        return "resources details   : "+name+" , "+location+" ,"+commercials+" , "+hey
    }
}