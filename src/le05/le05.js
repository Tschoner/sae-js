class Course {
    #grade;

    constructor(name, grade) {
        this.name = name;
        this.#grade = grade;
    }

    getGrade() {
        return this.#grade !== -1 ? this.#grade : 'nicht abgeschlossen';
    }

    isPassed() {
        return this.#grade < 5;
    }

    createCourseCard() {
        const wrapper = document.createElement('div');
        wrapper.style.padding = '20px';
        wrapper.style.marginRight = '10px';

        const courseTitle = document.createElement('h2');
        courseTitle.innerText = this.name;

        const grade = document.createElement('h4');
        grade.innerText = this.getGrade();
        wrapper.style.border = "thick solid gray";

        if(this.#grade === 5) {
            wrapper.style.borderColor = 'red';
        } else if(this.#grade > 0) {
            wrapper.style.borderColor = 'green';
        }

        wrapper.append(courseTitle, grade)
        return wrapper
    }
}

class Student {
    constructor(id, name, age, courses) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.courses = courses.map(course => new Course(course.name, course.grade));
    }

    static createStudent(data) {
        const {student, courses} = data;
        return new Student(student.id, student.name, student.age, courses);
    }

    displayStudentData() {
        const studentTitle = document.getElementById('student-title');
        const gradesContainer = document.getElementById('grades');
        const negativeGradeContainer = document.getElementById('negative-grades');

        studentTitle.innerText = `Student: ${this.name}(${this.age}) - ${this.id}`

        this.courses.forEach((course) => {
            if(course.isPassed()) { // cant access private field from outside (course.#grade !== 5 doesnt work)
                gradesContainer.append(course.createCourseCard());
            } else {
                negativeGradeContainer.append(course.createCourseCard())
            }
        })
    }
}

const data = {
    student: {
        id: 1,
        name: 'John Doe',
        age: 16,
    },
    courses: [
        {
            name: 'Math',
            grade: 3,
        },
        {
            name: 'English',
            grade: 4,
        },
        {
            name: 'PE',
            grade: 2,
        },
        {
            name: 'Music',
            grade: 5,
        },
        {
            name: 'Art',
            grade: -1,
        },
    ],
}

const student = Student.createStudent(data);
student.displayStudentData();


function handleFormSubmit(event) {
    event.preventDefault();

    const courseName = document.getElementById('course-name').value;
    const courseGrade = document.getElementById('course-grade').value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const gradeRegex = /^-1|[1-5]$/;

    if (!nameRegex.test(courseName)) {
        alert('Invalid course name. Only letters and spaces are allowed.');
        return;
    }

    if (!gradeRegex.test(courseGrade)) {
        alert('Invalid course grade. It must be either -1 for not finished or a number between 1 and 5.');
        return;
    }

    const newCourse = { name: courseName, grade: parseInt(courseGrade) };
    data.courses.push(newCourse);
    student.courses.push(new Course(newCourse.name, newCourse.grade));

    // Redisplay the student data
    document.getElementById('grades').innerHTML = '';
    document.getElementById('negative-grades').innerHTML = '';
    student.displayStudentData();
}

document.getElementById('course-form').addEventListener('submit', handleFormSubmit);
