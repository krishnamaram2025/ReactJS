import axios from 'axios';
// Model for CRUD OPERATIONS

export function addStudent(student){
  return axios.post('http://localhost:8000/students/', {
    studentId:null,
    SkillName:student.SkillName.value,
    StreamName:student.StreamName.value,
    // RegistrationNo:student.RegistrationNo.value,
    // Email:student.Email.value,
    // Course:student.Course.value
  })
    .then(response=>response.data)
}

export function getStudents() {
  return axios.get('http://localhost:8000/students/')
    .then(response => response.data)
}


export function updateStudent(stuid, student) {
  return axios.put('http://localhost:8000/students/' + stuid + '/', {
    SkillName:student.SkillName.value,
    StreamName:student.StreamName.value,
    // RegistrationNo:student.RegistrationNo.value,
    // Email:student.Email.value,
    // Course:student.Course.value
  })
   .then(response => response.data)
}

export function deleteStudent(studentId) {
  return axios.delete('http://localhost:8000/students/' + studentId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

