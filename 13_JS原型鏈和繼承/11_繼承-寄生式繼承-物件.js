var personObj = {
  name: 'Louis',
  age: 25
}

function createStudent(name) {
  var stu = Object.create(personObj)
  stu.name = name
  stu.studying = function() {
    console.log(name + " studying~")
  }
  return stu
}

var stuObj = createStudent('Kobe')
var stuObj1 = createStudent('Louis')


stuObj.studying()