function formValidation()
{
    var list=[]
    list=document.querySelectorAll("input")
    console.log(list)
    list.forEach(i =>{
        console.log(i.value)
        var prm=document.getElementById(i.name)
        if(i.value==null||i.value==" ")
        {
            prm.style.visibility="visible"
        }
        else
        {
            prm.style.visibilty="hidden"
        }
    });
}

function showElement()
{
    element=document.querySelectorAll(".space")
    element.style.visibility="visible"
}
