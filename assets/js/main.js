//
// var teacherName = ['Sally Jones', 'Squidward'];
// var deptName = ['Physics', 'Communication', 'English', 'Business'];
// var rating = [3.4, 5.0, 4.2];
// var avgRating = ((3.4 + 5.0 + 4.2)/3).toFixed(1);
// var students = ['Jessica Jones', 'Morris Moss', 'Bernard Black', 'Manny Bianco', 'Hermionie Grainger'];
// var courses = ['History', 'Art', 'Communications', 'Magic'];
// var GPA = [3.2, 4.0, 3.8, 4.0, 2];
// var semester = ['Winter 2017', 'Summer 2018', 'Fall 2018'];
// var courses = [
//     ['Roman History','History'],
//     ['Successful Negotiation', 'Communication'],
//     ['Improving CommunicationSkills', 'Communication'],
//     ['Teamwork Skills', 'Communication'],
//     ['Transcendental Meditation', 'Health'],
//     ['The Art of the Forced Unexpected Reboot', 'Computer Science'],
//     ['History of Tnetennba', 'Computer Sceience'],
//     ['Financial Accounting', 'Business'],
//     ['Managerial Economics', 'Business'],
//     ['Herbology', 'Magic'],
//     ['Charms and Potions', 'Magic']
// ]

// console.log("Teacher: " + teacherName);
// console.log("Department: " + deptName);
// console.log("Rating: " + rating);
// console.log("Average Rating: "+ avgRating);
//
// console.log("Students: " + students);
// console.log("Semesters: " + semester);
// console.log("Courses: " + courses);


//TODO #1 prompt user 1. ('What year will you graduate?') & 2. ('What month will you graduate?')
//check if answer is May or December
// var hsGradYears = ['2019', '2020', '2021', '2022'];
// var collegeGradYears = ['2023','2024','2025','2026'];
// var userGradYear = prompt('What year will you graduate?');
// var userGradMonth = prompt('What month will you graduate?');
//   if (userGradMonth == (('May' || userGradMonth == 'December') || (userGradYear < '2019'))) {
//     alert('You will graduate in ' + userGradMonth + ' of ' + userGradYear + ' from University!');
// }

//TODO if user input was not empty, use grad  year to decide if in HS or College
//console.log('You are in college.') or console.log('You are in high school.')
var hsGradYears = ['2019', '2020', '2021', '2022'];
var collegeGradYears = ['2023', '2024', '2025', '2026'];
var userGradYear = prompt('What year will you graduate?');
var userGradMonth = prompt('What month will you graduate?');
//
// if ((userGradMonth == 'May') || (userGradMonth == 'December')) {
//
//   hsGradYears.forEach(function(hsGradYear) {
//     if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == hsGradYear)))
//       console.log('You will be a high school graduate in ' + hsGradYear);
//       return true;
//   });
//
//
//   collegeGradYears.forEach(function(collegeGradYear) {
//    if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == collegeGradYear)))
//       console.log('You will be a college graduate in ' + collegeGradYear);
//   });
// }
//TODO STEP 3: Welcoming Some Students Write 2 anonymous functions and store then in variables called…
//welcomeCollegeStudent and welcomeHsStudent. Each will take one parameter,
//the student’s class (like Freshman, Sophomore… etc).

// var welcomeCollegeStudent = ;
// var welcomeHsStudent = ;
// function hsGradYear()

//
// function welcomeHsStudents() {
//     if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2019))){
//
//       console.log('Welcome, highschool freshman!');
//       console.log('You are still in highschool!');
//     }
// }
// // welcomeHsStudents();
//
//
// function welcomeCollegeStudents() {
//     if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2025))){
//       console.log('Welcome, collge junior!');
//     }
// }
// welcomeCollegeStudents();


//Replace the console logs in these above steps with calling these functions!
// function welcomeAllStudents() {
//   if (((userGradMonth == 'May' || userGradMonth == 'December') && ((userGradYear >= 2019) && (userGradYear < 2027)))) {
//     welcomeHsStudents();
//     welcomeCollegeStudents();
//   }
// }
// welcomeAllStudents();
//
//
// // TODO The welcomeStudentByGraduatingClass should use the grad month and year to figure out what graduating
// // class the student is in (like Freshman, Sophomore, etc), then call the welcome function and pass the correct graduating class as a parameter to that welcome function.
function welcomeHsStudents() {
    if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2019))){

      console.log('Welcome, highschool freshman!');

    }
    else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2020))){

      console.log('Welcome, highschool Sophmore!');

    }
    else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2021))){

      console.log('Welcome, highschool Junior!');

    }
    else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2022))){

      console.log('Welcome, highschool Senior!');

    }
}
// welcomeHsStudents();

function welcomeCollegeStudents() {
    if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2023))){

      console.log('Welcome, college freshman!');

    }
    else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2024))){

      console.log('Welcome, college Sophmore!');

    }
    else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2025))){

      console.log('Welcome, college Junior!');

    }
    else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2026))){

      console.log('Welcome, college Senior!');

    }
}
// welcomeCollegeStudents();

function welcomeAllStudents() {
  if (((userGradMonth == 'May' || userGradMonth == 'December') && ((userGradYear >= 2019) && (userGradYear < 2027)))) {
    welcomeHsStudents();
    welcomeCollegeStudents();
  }
}
// welcomeAllStudents();

function welcomeStudentsByGraduatingClass() {
  if (userGradYear > 2028) {
    return;
  }
  if (((userGradMonth == 'May' || userGradMonth == 'December') && ((userGradYear >= 2019) && (userGradYear < 2027))))  {

    welcomeHsStudents();
}
}
welcomeStudentsByGraduatingClass(userGradMonth, userGradYear, welcomeAllStudents());
