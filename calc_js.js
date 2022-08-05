function clearScreen()//clears the input box
{
    document.getElementById('result').value=" ";
}

var bttn=document.getElementById('btn1')
    bttn.addEventListener('click',display)

function display(val)//displays the entered button
{
    /*var bttn=document.getElementById('btn1')
    bttn.addEventListener('click',display)*/
    document.getElementById("result").value+=val;
}

function calculate()
{
    var temp=document.getElementById('result').value;
    var calc=eval(temp);
    document.getElementById('result').value=calc;
}
/*var bttn=document.getElementById('btn1');
bttn.addEventListener('click',display);*/