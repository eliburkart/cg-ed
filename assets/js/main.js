
var teacherName = ['Sally Jones', 'Squidward'];
var deptName = ['Physics', 'Communication', 'English', 'Business'];
var rating = [3.4, 5.0, 4.2];
var avgRating = ((3.4 + 5.0 + 4.2)/3).toFixed(1);
var students = ['Jessica Jones', 'Morris Moss', 'Bernard Black', 'Manny Bianco', 'Hermionie Grainger'];
var courses = ['History', 'Art', 'Communications', 'Magic'];
var GPA = [3.2, 4.0, 3.8, 4.0, 2];
var semester = ['Winter 2017', 'Summer 2018', 'Fall 2018'];

console.log("Teacher: " + teacherName);
console.log("Department: " + deptName);
console.log("Rating: " + rating);
console.log("Average Rating: "+ avgRating);

console.log("Students: " + students);
console.log("Semesters: " + semester);
console.log("Courses: " + courses);

//STEP 2: Turn teacher’s avg rating calculation into a function
function getAvgRating() {
  return (rating[0] + rating[1] + rating[2]) / 3;
}
console.log(getAvgRating());

//STEP 3: Create an add teacher rating function
function addTeacherRating() {
  rating.push(4);

}
  addTeacherRating();
  console.log(rating);

//create a prompt that asks the user to review a teacher

//“We would like for you to review . Please enter a rating between 0.0 - 5.0?"
//1) check that the user entered a number between 0.0 and 5.0…
//2) if they did not, prompt them again…
//3) if they did, add the rating value to the teacher’s rating array
//4) AND alert back to the user… “Thanks for you review! <teacher’s name> average rating is now ."

console.log('We would like for you to review . Please enter a rating between 0.0 - 5.0');
//
function reviewTeacher() {

    if  rating > 0.0 && rating <= 5.0;
    addTeacherRating(4);
    console.log('Thanks for you review! <teacher’s name> average rating is now ' + getAvgRating())
} else {
   console.log('Please enter a rating between 0.0 - 5.0')


}
