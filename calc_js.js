function clearScreen()//clears the input box
{
    document.getElementById('result').value=" ";
}

function display(val)//displays the entered button
{
    var bttn=document.getElementById('result').value+=val;
    bttn.addEventListener('click',display)
    //document.getElementById("result").value+=val;
}

function calculate()
{
    var temp=document.getElementById('result').value;
    var calc=eval(temp);
    document.getElementById('result').value=calc;
}
