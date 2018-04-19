
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
    ['Transcendental Meditation', 'Health'],
    ['The Art of the Forced Unexpected Reboot', 'Computer Science'],
    ['History of Tnetennba', 'Computer Sceience'],
    ['Financial Accounting', 'Business'],
    ['Managerial Economics', 'Business'],
    ['Improving CommunicationSkills', 'Communication'],
    ['Teamwork Skills', 'Communication']
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


//STEP 2: Turn teacher’s avg rating calculation into a function

// function getAvgRating(userReview) {
//   rating.push(userReview);
//   var sum = 0;
//     for (var i = 0; i < rating.length; i++) {
//     (sum += rating[i]);
//      }
//      console.log(sum/rating.length);
//   return sum/rating.length;
// }

//STEP 3: Create an add teacher rating function
// function addTeacherRating() {
//   rating.push(userReview);
// }
  // addTeacherRating(userReview);
  // console.log(rating);

//create a prompt that asks the user to review a teacher
// var userReview = prompt('We would like for you to review your teacher. Please enter a rating between 0 - 5');
//
//     if  (userReview > 0 && userReview <= 5) {
//     alert('Thanks for you review! Your teacher now has an average rating of ' + getAvgRating(parseInt(userReview, 10)).toFixed(2));
// } else {
//    prompt('Please enter a rating between 0 - 5');
// }

// STEP 2: Create a function that filters course by departments//
// This function should take 2 parameter a course array and a department. The function should return a new array filled with courses that are ONLY in the department specified in the parameter.
// note: to test that this works… I would suggest calling the function and then console.log the result to make sure it is filtering as expected.
function findCourse() {
for (var i=0, len=courses.length; i < len; i++) {
  for (var j=0, len2=courses[i].length; j< len2; j++) {


  }

  while (courses[j] == 'Communication') {
    console.log(courses[i]);
  }

}
