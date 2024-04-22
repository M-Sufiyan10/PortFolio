const body=document.body;
var count=0;
var logo=document.getElementById("LOGO")
var about=document.getElementById("li1")
var project=document.getElementById("li2")
var contact=document.getElementById("li3")
function darkmode()
{
    if(count===0)
    {
        count+=1;
        body.style.color="white";
        body.style.backgroundColor="#323C47";
        logo.style.color="white";
        about.style.color="white";
        project.style.color="white";
        contact.style.color="white";
    }
    else if(count===1)
    {
        count-=1;
        body.style.color="black";
        body.style.backgroundColor="white";
        logo.style.color="black";
        about.style.color=" black ";
        project.style.color="black";
        contact.style.color="black";
    }
    
}
