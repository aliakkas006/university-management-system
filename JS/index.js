const { Guardian, Student, Teacher } = require('./person');
const { Contact, Address } = require('./Contact');
const { Department, Subject } = require('./university');

/**
 * Guardian ID 1
 * Contact ID 101
 * Address ID 201
 */
const guardian = new Guardian(1, 'Ali', 'Engineer', 600000);
guardian.blood = 'A+';

guardian.contact = new Contact({
  id: 101,
  email: 'ali@gmail.com',
  phone: '1232215',
  alternativPhone: '245555',
});

guardian.contact.address = new Address({
  id: 201,
  roadNo: '125A',
  city: 'Dhaka',
  postalCode: 1245,
  region: 'Dhaka',
  country: 'Bangladesh',
});
console.log(guardian + '');

/**
 * Student ID 1
 */
const student = new Student(1, 'Anisur Rahman', 'ST-001', guardian);

student.blood = 'B+';
student.contact = new Contact({
  id: 101,
  email: 'anis@gmail.com',
  phone: '2145844',
  alternativPhone: student.guardian.contact.phone,
  address: student.guardian.contact.address,
});

/**
 * Department ID 1
 */
const department = new Department({ id: 1, name: 'ECE' });

student.department = department;
department.subjects = [
  new Subject(1, 'Data Structures & Algorithm', 3.75),
  new Subject(2, 'Signals & Systems', 3.0),
  new Subject(3, 'Microprocessor & Embedded Systems', 4.0),
];

const totalCredit = student.department.subjects.reduce(
  (acc, curr) => (acc += curr.credit),
  0
);

console.log('Total Credit: ', totalCredit);

/**
 * Teachers
 */
const dean = new Teacher(
  1,
  'Professor Dr. Mizanur Rahman',
  department.subjects[1],
  'EM-001'
);

dean.blood = 'A-';
dean.employeeID = 'EM-001';
dean.salary = 70000;
dean.department = department;
dean.contact = new Contact({
  id: 111,
  email: 'mizan@gmail.com',
  phone: '355477877',
  alternativPhone: '5455555',
  address: new Address({
    id: 222,
    roadNo: '25C',
    city: 'Khulna',
    postalCode: 4568,
    region: 'Khulna',
    country: 'Bangladesh',
  }),
});

const teacher_1 = new Teacher(
  2,
  'Professor Dr. Shamim Ahsan',
  department.subjects[2],
  'EM-002'
);

teacher_1.blood = 'A+';
teacher_1.employeeID = 'EM-002';
teacher_1.salary = 65000;
teacher_1.department = department;
teacher_1.contact = new Contact({
  id: 101,
  email: 'shamim@gmail.com',
  phone: '455477877',
  alternativPhone: '6455555',
  address: new Address({
    id: 55,
    roadNo: '85C',
    city: 'Barishal',
    postalCode: 9568,
    region: 'Barishal',
    country: 'Bangladesh',
  }),
});

const teacher_2 = new Teacher(
  3,
  'Associate Professor Dr. Tariq Hasan',
  department.subjects[0],
  'EM-003'
);

teacher_2.blood = 'A+';
teacher_2.employeeID = 'EM-003';
teacher_2.salary = 50000;
teacher_2.department = department;
teacher_2.contact = new Contact({
  id: 101,
  email: 'tariq@gmail.com',
  phone: '95477877',
  alternativPhone: '0455555',
  address: new Address({
    id: 95,
    roadNo: '75C',
    city: 'Chandpur',
    postalCode: 7854,
    region: 'Chattogram',
    country: 'Bangladesh',
  }),
});

department.dean = dean;
department.addTeacher(dean);
department.addTeacher(teacher_1);
department.addTeacher(teacher_2);

console.log(student + '');

student.department.teachers.forEach((teacher, index) => {
  console.log(`${index + 1}. ${teacher.name} (${teacher.subject.name})`);
});

const totalSalary = student.department.teachers.reduce(
  (acc, curr) => (acc += curr.salary),
  0
);

console.log('Total Salary: ', totalSalary);

let count = 0;

if (student.blood === 'A+') {
  count++;
  console.log(`${count}. ${student.name}, Blood Group: ${student.blood}`);
}

if (student.guardian.blood === 'A+') {
  count++;
  console.log(
    `${count}. ${student.guardian.name}, Blood Group: ${student.guardian.blood}`
  );
}

student.department.teachers.forEach((teacher) => {
  if (teacher.blood === 'A+') {
    count++;
    console.log(`${count}. ${teacher.name}, Blood Group: ${teacher.blood}`);
  }
});

console.log('Total A+ blood group: ', count);
