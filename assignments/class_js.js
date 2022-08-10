class Student {
    constructor(std_name, std_class, std_age, std_gender, std_location) {
        this.std_name = std_name,
        this.std_class = std_class,
        this.std_age = std_age,
        this.std_gender = std_gender,
        this.std_location = std_location
    }
    getAlert()
    {
        alert("Empty Values Entered!")
    }
    addStudent(){
        while(1){
            this.std_name = prompt("Enter your name: ");
            if(this.std_name.length === 0){
                this.getAlert();
            }
            else{
                this.std_class = prompt("Enter the class: ");
                if(this.std_class.length === 0){
                    this.getAlert();
                }
                else{
                    this.std_age = prompt("Enter the age: ");
                    if(this.std_age.length === 0){
                        this.getAlert();
                    }
                    else{
                        this.std_gender = prompt("Enter the gender: ");
                        if(this.std_gender.length === 0){
                            this.getAlert();
                        }
                        else{
                            this.std_location = prompt("Enter the location: ")
                            if(this.std_location.length === 0){
                            this.getAlert();
                            }
                            else{
                                alert("Entry confirmed!");
                                break;
                            }
                        }
                    }     
                }
            }
        }
    }
}
var studList = [];
    function addStudentToList(){
        var p1 = new Student();
        p1.addStudent();
        studList.push(p1);
    }
    function editStudent(){ 
            var sname = prompt("Enter the student name you want to change: ");
            studList.forEach(student => {
                if(sname === student.std_name){
                    student.addStudent();
                }
                else{
                    alert(" Name not found!")
                }
            });
    }
    function deleteStudent(){
        var sname = prompt("Enter the student name you want to delete: ");
        studList.forEach((student,id) => {
            if(sname === student.std_name){
                delete studList[id];
                alert("Deleted successfully!")
            }
            else{
                alert(" Name not found!")
            }
        });
    }
    function viewStudentDetails(){
        studList.forEach(student => {
            alert(`Name:  ${student.std_name} \nClass: " ${student.std_class} \nAge:  ${student.std_age} \nGender: " ${student.std_gender} \nLocation: " ${student.std_location}`);

        })
    }
    function showStudent(){
            var sname = prompt("Enter the student name you want to display the details: ");
            studList.forEach(student => {
                if(sname === student.std_name){
                    alert(`Name:  ${student.std_name} \nClass: " ${student.std_class} \nAge:  ${student.std_age} \nGender: " ${student.std_gender} \nLocation: " ${student.std_location}`);
                }
                else{
                    alert(" Name not found!")
                }
            });
        
    }
    function getUserDetails(){
        while(1)
        {
            var ch = prompt("Enter your choice:\n1.Add Student \n2.Edit Student \n3.Delete Student \n4.View All Student \n5.Show details of a Student").trim();
            switch(ch)
            {
                case "1": addStudentToList()
                        break;
                case "2": editStudent()
                        break;
                case "3": deleteStudent()
                        break;
                case "4": viewStudentDetails()
                        break;
                case "5": showStudent()
                        break;
                default:alert("Please enter a correct number!")
            }
        }
    }
getUserDetails()


