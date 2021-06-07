class Student {
  constructor (name, isAvailable) {
    this.name = name;
    this.isAvailable = isAvailable
  }
  updateName (name) {
    this.name = name
  }
}

class Teacher{
   constructor(name){
      this.name = name
      this.students = []
   }
   addStudent(student){
       this.students.push(student)
   }
   printStudents(){
       this.students.forEach( (singleStudent) => {
            console.log(singleStudent.name )
       } )
   } 
   findStudent(name) {
        for (let i=0; i < this.students.length; i++) {
             if (this.students[i].name == name ) {
                 if ( this.students[i].isAvailable) {
                     return this.students[i].name
                 }
                 else {
                   return "Student not available"
                 }  
             }
       }
       return "Student not found"
    }
}


// creating students
let student1 = new Student('Sandra', true)
let student2 = new Student('Gunner', false)
let student3 = new Student('Juan', false)

//creating a teacher
let teacher = new Teacher('Teresa')

// add students for the teacher
teacher.addStudent(student1)
teacher.addStudent(student2)
teacher.addStudent(student3)

// TEST 1
// should print 'Sandra', 'Gunner' and 'Juan' on new lines
teacher.printStudents() 

// TEST 2
// should print 'Sandra',
let output = teacher.findStudent('Sandra')
console.log(output) 

// TEST 3
// should print 'Student not available',
let output1 = teacher.findStudent('Juan')
console.log(output1) 

// TEST 4
// should print 'Student not found',
let output2 = teacher.findStudent('Manish')
console.log(output2) 
