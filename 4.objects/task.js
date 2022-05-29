function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Иван","мужской", 18);
let student2 = new Student("Пётр","мужской", 19);
let student3 = new Student("Сидор","мужской", 17);
let student4 = new Student("Мария","женский", 20);



Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  }



Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
     this.marks = [mark];
  } else {
     this.marks.push(mark);
    }
}


Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = marks;
    } else {
    this.marks = this.marks.concat(...marks);
    }
}


Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
