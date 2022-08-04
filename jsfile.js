let myword="Hello from the other sideeee!!"
/*alert("Hello World");
const a=10;
alert(a)
var myword="test";
alert(myword);
let place="tvm";
alert(place);

//string functions
alert(myword.length) //30

//string slicing
//let parttext=myword.slice(4,10)//o from
//let parttext=myword.slice(5) //from the other sideeee!!
let parttext=myword.slice(-11,-4)//r sidee
alert(parttext)*/

//string replacement
let newtext=myword.replace("from","to")
//alert(newtext)

//joining 2 string
myword2="I called a thousand timeeeees!!!"
let myjoinedtext=myword.concat(myword2)
//alert(myjoinedtext)

/*//uppercase and lowercase
//alert(myjoinedtext.toUpperCase())

//trim space
var text="     krp     "
//alert(text.trim())

//select char/ascii from string
alert(myword.charAt(4))//o
alert(myword.charCodeAt(5))//32

//arithmetic 
var a=3,b=2;
var result=a+b;
//alert(result)//5
//eval()
var result=eval("a*b+b+2+3")
alert(result)//13

//boolean
a=5, b=10
var result=a===b;//false
var result=a!==b;//true
alert(result)*/

//conditional operators
//if-else -- no : for stmt
//switch(){case 1:case2 default}
//looping stmts
//while like c
//for like c

/*
//functions
function add(a,b)
{
    return a+b;
}

add=function(a,b)
{
    return a+b
}

var res=add(3,4)
alert(res)

//arrow functions
var square=a =>
{
    console.log("number:"+a)
    return a*a
};
var res=square(4)
console.log(res)
//alert(res)

//deleting () and {}
var square=a=>a*a
var res=square(5)
//alert(res)

//mapping an array to arrow function
var myarray=[2,4,6]
var square_array=myarray.map(a=>a*a)
console.log()

//arrays
var myarray=["a","b","c"];
alert(myarray.length)
myarray.push("d")
alert(myarray)
myarray.pop()
alert(myarray)

//new for loop using array and forEach
var myarray=["a","b","c"];
myarray.forEach (i=>
{alert(i)
})

//concatenating using .concat() into immutable arrays
//destructing each vaue of array to a var
t=[1,2,3,4,5,6,7,8]
[first,second,third,...fourth]=t
alert(first) //error not working

//objects
var student={
    name:"abc",
    age:"12",
    talk:function(){
        alert("hi")
    }
}
student.studname="def"
alert(student.studname)
student.talk()

//nested obj
student.address={
    door_no:10,
    district:"delhi",
}
alert(student.address.door_no)//nesting of obj*/

//declaring empty obj
var car={}
car.model="jkl"
car.stop=function()
{
    alert(this.model+" car stopped")
}
alert(car.model)
//this keyword - refers to that obj
car.stop()

//oops in js
class person
{constructor(name,age)//declaring constructor
    {this.name=name
     this.age=age  
    }
    greet()//member func in class
    {
        alert("hello "+this.name)
    }
}

var varname=new person("abc",23)
varname.greet()
