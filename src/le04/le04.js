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
const studentTitle = document.getElementById('student-title');
const gradesContainer = document.getElementById('grades');
const negativeGradeContainer = document.getElementById('negative-grades');

function createCourseCard(courseData) {
    const wrapper = document.createElement('div');
    wrapper.style.padding = '20px';
    wrapper.style.marginRight = '10px';

    const courseTitle = document.createElement('h2');
    courseTitle.innerText = courseData.name;

    const grade = document.createElement('h4');
    grade.innerText = courseData.grade !== -1 ? courseData.grade : 'nicht abgeschlossen';
    wrapper.style.border = "thick solid gray";

    if(courseData.grade === 5) {
        wrapper.style.borderColor = 'red';
    } else if(courseData.grade > 0) {
        wrapper.style.borderColor = 'green';
    }

    wrapper.append(courseTitle, grade)
    return wrapper
}

studentTitle.innerText = `Student: ${data.student.name}(${data.student.age}) - ${data.student.id}`

data.courses.forEach((course) => {
    if(course.grade !== 5) {
        gradesContainer.append(createCourseCard(course));
    } else {
        negativeGradeContainer.append(createCourseCard(course))
    }
})

