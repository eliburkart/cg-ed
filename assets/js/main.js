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
var collegeGradYears = ['2023','2024','2025','2026'];
var userGradYear = prompt('What year will you graduate?');
var userGradMonth = prompt('What month will you graduate?');
while ((userGradMonth !== '') || (userGradYear !== '')){
  if (((userGradMonth == 'May' || userGradMonth == 'December') || (userGradYear == hsGradYears[i]))) {
    alert('You will graduate in ' + userGradMonth + ' of ' + userGradYear + ' from University!');
    return false;
    hsGradYears.forEach(function(userGradYear, i) {
      console.log(i + ' : ' + ' you are high school')

    })
}
}
