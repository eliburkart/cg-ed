
var teacherName = ['Sally Jones', 'Squidward'];
var deptName = ['Physics', 'Communication', 'English', 'Business'];
var rating = [3.4, 5.0, 4.2];
var avgRating = ((3.4 + 5.0 + 4.2)/3).toFixed(1);
var students = ['Jessica Jones', 'Morris Moss', 'Bernard Black', 'Manny Bianco', 'Hermionie Grainger'];
var courses = ['History', 'Art', 'Communications', 'Magic'];
var GPA = [3.2, 4.0, 3.8, 4.0, 2];
var semester = ['Winter 2017', 'Summer 2018', 'Fall 2018'];
var courses = [
    ['Roman History','History'],
    ['Successful Negotiation', 'Communication'],
    ['Improving CommunicationSkills', 'Communication'],
    ['Teamwork Skills', 'Communication'],
    ['Transcendental Meditation', 'Health'],
    ['The Art of the Forced Unexpected Reboot', 'Computer Science'],
    ['History of Tnetennba', 'Computer Sceience'],
    ['Financial Accounting', 'Business'],
    ['Managerial Economics', 'Business'],
    ['Herbology', 'Magic'],
    ['Charms and Potions', 'Magic']
]

// console.log("Teacher: " + teacherName);
// console.log("Department: " + deptName);
// console.log("Rating: " + rating);
// console.log("Average Rating: "+ avgRating);
//
// console.log("Students: " + students);
// console.log("Semesters: " + semester);
// console.log("Courses: " + courses);

// //TODO 2: Turn teacher’s avg rating calculation into a function
//
// //create a prompt that asks the user to review a teacher
// var userReview = prompt('We would like for you to review your teacher. Please enter a rating between 0 - 5');
//
//     if  ((userReview > 0) && (userReview <= 5)) {
//     alert('Thanks for you review! Your teacher now has an average rating of ' +  getAvgRating(parseInt(userReview, 10)).toFixed(2));
//
// } else {
//    prompt('Please enter a rating between 0 - 5');
// }
//
// function getAvgRating(userReview) {
//   rating.push(userReview);
//   var sum = 0;
//     for (var i = 0; i < rating.length; i++) {
//     (sum = sum + rating[i]);
//      }
//      console.log(sum/rating.length);
//   return sum/rating.length;
// }
// // //
// // // //STEP 3: Create an add teacher rating function
// function addTeacherRating() {
//   rating.push(userReview);
// }
//   addTeacherRating(userReview);
//   console.log(rating);


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
// var hsGradYears = ['2019', '2020', '2021', '2022'];
// var collegeGradYears = ['2023', '2024', '2025', '2026'];
// var userGradYear = prompt('What year will you graduate?');
// var userGradMonth = prompt('What month will you graduate?');
// //
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
// function welcomeHsStudents() {
//     if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2019))){
//
//       console.log('Welcome, highschool freshman!');
//
//     }
//     else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2020))){
//
//       console.log('Welcome, highschool Sophmore!');
//
//     }
//     else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2021))){
//
//       console.log('Welcome, highschool Junior!');
//
//     }
//     else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2022))){
//
//       console.log('Welcome, highschool Senior!');
//
//     }
// }
// // welcomeHsStudents();
//
// function welcomeCollegeStudents() {
//     if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2023))){
//
//       console.log('Welcome, college freshman!');
//
//     }
//     else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2024))){
//
//       console.log('Welcome, college Sophmore!');
//
//     }
//     else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2025))){
//
//       console.log('Welcome, college Junior!');
//
//     }
//     else if (((userGradMonth == 'May' || userGradMonth == 'December') && (userGradYear == 2026))){
//
//       console.log('Welcome, college Senior!');
//
//     }
// }
// // welcomeCollegeStudents();
//
// function welcomeAllStudents() {
//   if (((userGradMonth == 'May' || userGradMonth == 'December') && ((userGradYear >= 2019) && (userGradYear < 2027)))) {
//     welcomeHsStudents();
//     welcomeCollegeStudents();
//   }
// }
// // welcomeAllStudents();
//
// function welcomeStudentsByGraduatingClass() {
//   if (userGradYear > 2028) {
//     return;
//   }
//   if (((userGradMonth == 'May' || userGradMonth == 'December') && ((userGradYear >= 2019) && (userGradYear < 2027))))  {
//
//     welcomeHsStudents();
// }
// }
// welcomeStudentsByGraduatingClass(userGradMonth, userGradYear, welcomeAllStudents());


// //create a prompt that asks the user to review a teacher
var userReview = prompt('We would like for you to review your teacher. Please enter a rating between 0 - 5');

    if  ((userReview > 0) && (userReview <= 5)) {
    alert('Thanks for you review! Your teacher now has an average rating of ' +  teacher.getAvgRating(parseInt(userReview, 10)).toFixed(2));

} else {
   prompt('Please enter a rating between 0 - 5');
}
// var userReview = prompt('We would like for you to review your teacher. Please enter a rating between 0 - 5');
var teacher = {
    name: 'Squidward',
    department: 'Business',
    rating: [4.5,3.2,2.0,5],
    addRating: function(userReview) {
     this.rating.push(userReview);
     // addTeacherRating(userReview);
     // console.log(this.rating);
   }   ,

 getAvgRating: function() {
   // this.rating.push(userReview);
   var sum = 0;
     for (var i = 0; i < this.rating.length; i++) {
     (sum += this.rating[i]);
      }
      // console.log(sum/this.rating.length);
   return sum/this.rating.length;
             },
};



// ****************************************************OBJECT ASSIGMENT*****************************************************
// TODO STEP 1: Creating Your First Object: the Teacher Object


// To do this you will need to change the addTeacherRating call. You now need to call your addRating
// property on your teacher object and only pass in the userRating.
// instead of using our old teacher variables, we are now going to use our new teacher object to make sure everything is working correctly.
// var userReview = prompt('We would like for you to review your teacher. Please enter a rating between 0 - 5');



// PROTOTYPES STEP 1  This constructor should take parameters to give the Teacher properties their initial values. So for the Teacher class, we need parameters
// for name, department, and maybe ratings (if you want to, we could also just add their ratings later with the addTeacherRating function, so
// up to you). Then inside the Teacher Constructor function you need to set the teacher’s properties using this… like:
//
// function Teacher() {
//   this.name: name;
//   this.department: department;
//   this.teacher: teacher;
//   this.semester: semester;
// }
