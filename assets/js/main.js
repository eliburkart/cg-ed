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

// // console.log("Teacher: " + teacherName);
// // console.log("Department: " + deptName);
// // console.log("Rating: " + rating);
// // console.log("Average Rating: "+ avgRating);
// //
// // console.log("Students: " + students);
// // console.log("Semesters: " + semester);
// // console.log("Courses: " + courses);
//
//
// //TODO 2: Turn teacher’s avg rating calculation into a function
//
// // function getAvgRating(userReview) {
// //   rating.push(userReview);
// //   var sum = 0;
// //     for (var i = 0; i < rating.length; i++) {
// //     (sum += rating[i]);
// //      }
// //      console.log(sum/rating.length);
// //   return sum/rating.length;
// // }
//
// //STEP 3: Create an add teacher rating function
// // function addTeacherRating() {
// //   rating.push(userReview);
// // }
//   // addTeacherRating(userReview);
//   // console.log(rating);
//
// //create a prompt that asks the user to review a teacher
// // var userReview = prompt('We would like for you to review your teacher. Please enter a rating between 0 - 5');
// //
// //     if  (userReview > 0 && userReview <= 5) {
// //     alert('Thanks for you review! Your teacher now has an average rating of ' + getAvgRating(parseInt(userReview, 10)).toFixed(2));
// // } else {
// //    prompt('Please enter a rating between 0 - 5');
// // }
//
// // TODO 2: Create a function that filters course by departments//
// // This function should take 2 parameter a course array and a department. The function should return a new array filled with courses that are ONLY in the department specified in the parameter.
// // note: to test that this works… I would suggest calling the function and then console.log the result to make sure it is filtering as expected.
// //
// function findCourse() {
//
// 	for (var i=0, len=courses.length; i < len; i++) {
//
// 		if (courses[i][1] =='Communication') {
// 			console.log('Communication: '+ courses[i][0]);
//
// 		}
//
// 		else if (courses[i][1] == 'Magic')  {
//
// 			console.log('Magic: '+ courses[i][0]);
//
// 		}
//     else if (courses[i][1] == 'History')  {
//
//       console.log('History: '+ courses[i][0]);
//
//     }
//     else if (courses[i][1] == 'Health')  {
//
//       console.log('Health: '+ courses[i][0]);
//
//     }
//     else if (courses[i][1] == 'Business')  {
//
//       console.log('Business: '+ courses[i][0]);
//
//     }
//     else  {
//     	console.log('Computer Science: '+ courses[i][0]);
//     }
// 	}
//
// }
//
// console.log(findCourse());
//
//
//
// //TODO 3: Putting it all together
// // This prompt should ask the user what department they are looking for a course in. The user should enter a department name.
// var userCourse = prompt("What department are you looking for?");
// // 1) check that the user entered a valid department name…
// //3) if they did, use the function you create above to filter the course list
// //4) AND alert (the js function like prompt) back to the user the course titles that they can choose from.
// for (var i=0, len=courses.length; i < len; i++)
//   if (courses[i][1] == userCourse){
//     console.log(userCourse + ' Offerings: ' + courses[i][0]);
//     }
//
// // 2) if they did not, prompt them again…
// // else  if (userCourse !== courses[i][1]){
// //     alert('That is not a valid department.');
// // }




// TODO STEP 1: Prompting User
// We need to prompt the user twice. One time for the student’s college graduation year (2018) and one for the student’s college graduation month (May or December).
// If the user’s input is not valid, remember to re-prompt them :)   (https://javascript.info/ifelse  check this out)
// regular functions are like SQL like %_


var  userYear = prompt('Enter graduation year, please.');
var gradYears = [2017, 2018, 2019, 2020, 2021,2022,2023,2024,2025,2026,2027];

var getGradYear = function() {

    	// for (var i=0, len=gradYears.length; i < len; i++)  {
for (var i = 0; i < gradYears.length; i++){
        console.log("for index: " + i);
        console.log(userYear);
        console.log(gradYears[i]);

        if (userYear >= 2017 && userYear < 2022) {
          console.log('Your high school graduation year is ' + userYear);
          }

        // if else (userYear !== gradYears[i]) {
        //
        //     console.log(getGradYear(userYear));
        //     }

        // else { alert('Incorrect, try again!')
        //   // getGradYear(useryear);
        //   }
          }
}
getGradYear(userYear);

// var gradYears = [['2017', '2018', '2019', '2020', '2021'],['2022','2023','2024','2025','2026','2027']]
// var userYear = prompt('What year will you graduate?');
// function  getGradYear() {
//
//     for (var i=0, len=gradYears.length; i < len; i++) {
//       if (gradYears[i][0] == userYear) {
//        console.log('You selected ' + userYear);
//       }
//
//       // else if (userYear !== gradYears[i]){
//       //         console.log('Incorrect. Try again.')
//       //
//       //       }
//
//     }
//
// }


//recursive function here - so TODO create a funcion

// var gradMonth = ['May','December']
// var userMonth = prompt('Enter graduation month, please.');
// function getGradMonth() {
// for (var i=0; i<gradMonth.length; i++) {
// if (userMonth == gradMonth[i]){
//   alert('Graduating in ' + gradMonth);
//   }
// }

// STEP 2: Figuring Out if the User is in High School or College

// if userYear ==



// TODO STEP 3: Welcoming Some Students Write 2 anonymous functions and store then in variables called… welcomeCollegeStudent
// and welcomeHsStudent. Each will take one parameter, the student’s class (like Freshman, Sophomore… etc).
