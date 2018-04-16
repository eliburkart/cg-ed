
var teacherName = ['Sally Jones', 'Squidward'];
var deptName = ['Physics', 'Communication', 'English', 'Business'];
var rating = [3.4, 5.0, 4.2];
var avgRating = ((3.4 + 5.0 + 4.2)/3).toFixed(1);
var students = ['Jessica Jones', 'Morris Moss', 'Bernard Black', 'Manny Bianco', 'Hermionie Grainger'];
var courses = ['History', 'Art', 'Communications', 'Magic'];
var GPA = [3.2, 4.0, 3.8, 4.0, 2];
var semester = ['Winter 2017', 'Summer 2018', 'Fall 2018'];
var courseDept = [['Roman History','History'], ['Successful Negotiation', 'Communication']]

console.log("Teacher: " + teacherName);
console.log("Department: " + deptName);
console.log("Rating: " + rating);
console.log("Average Rating: "+ avgRating);

console.log("Students: " + students);
console.log("Semesters: " + semester);
console.log("Courses: " + courses);


//STEP 2: Turn teacher’s avg rating calculation into a function

function getAvgRating() {
  // rating.forEach(function(rating, i)){
  //   console.log(i + ':' + rating);
  // }
  // rating.push(userReview);
    for (var i = 0; i < rating.length; i++) {
    var newRating = rating[i] + rating[i];
   }
}

console.log(getAvgRating());
//STEP 3: Create an add teacher rating function
// function addTeacherRating() {
//   rating.push(userReview);
// }
  // addTeacherRating(userReview);
  // console.log(rating);

//create a prompt that asks the user to review a teacher
//3) if they did, add the rating value to the teacher’s rating array
//4) AND alert back to the user… “Thanks for you review! <teacher’s name> average rating is now ."

var userReview = prompt('We would like for you to review your teacher. Please enter a rating between 0 - 5');

    if  (userReview > 0 && userReview <= 5) {
    alert('Thanks for you review! Your teacher now has an average rating of ' + getAvgRating());
} else {
   prompt('Please enter a rating between 0 - 5');

}
