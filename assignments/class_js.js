class Student
{
    constructor(name,studclass,age,gender,loc)
    {   this.name=name
        this.studclass=studclass
        this.age=age
        this.gender=gender
        this.loc=loc
    }
    addstudent()
    {   this.name=prompt("Enter the student name:")
        this.studclass=prompt("Enter the student class:")
        this.age=prompt("Enter the students age:")
        this.gender=prompt("Enter the gender:")
        this.loc=prompt("Enter the students location:")
    }
}
var fname=prompt("Enter the student name:")

var varname=new Student
varname.addstudent()


