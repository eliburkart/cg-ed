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
//
// var  userYear = prompt('Enter graduation year, please.');
// var gradYears = [2017, 2018, 2019, 2020, 2021,2022,2023,2024,2025,2026,2027];
//
// var getGradYear = function() {
//
//     	// for (var i=0, len=gradYears.length; i < len; i++)  {
// for (var i = 0; i < gradYears.length; i++){
//         // console.log("for index: " + i);
//         // console.log(userYear);
//         // console.log(gradYears[i]);
//
//         if (userYear >= 2017 && userYear < 2022) {
//           alert('Your high school graduation year is ' + userYear);
//           return false;
//           }
//
//         else {
//           alert('Incorrect, try again!')
//           return false;
//       }
// }
// }
// // getGradYear(userYear);
//
//
// var gradMonth = ['May','December'];
// var userMonth = prompt('Enter graduation month, please.');
// function getGradMonth() {
// for (var i=0; i<gradMonth.length; i++) {
// if (userMonth == gradMonth[i]){
//   alert('Graduating in ' + userMonth + ' '+ userYear);
//   return false;
//   }
//   else {
//     alert('Incorrect, try again!')
//     return false;
// }
// }
// }
// // getGradMonth();
// // STEP 2: Figuring Out if the User is in High School or College
// hsGrads = [2018,2019];
// function welcomeStudent() {
// for (var i = 0; i < hsGrads.length; i++) {
//   if (getGradYear () = hsGrads[i]) {
//     alert('Welcome, you high school grad, you!!');
//   return false;
// }
// else {
//   alert('Welcome to university!');
//   return false;
// }
// }
// }
// getGradYear();
// getGradMonth();
// welcomeStudent();
var grads = [{
    'isYear': 2018,
    'isGrade': 'Highschool Freshman'
  },

  {
    'isYear': 2019,
    'isGrade': 'Highschool Sophmore'
  },
  {
    'isYear': 2020,
    'isGrade': 'Highschool Junior'
  },
  {
    'isYear': 2021,
    'isGrade': 'Highschool Senior'
  },
  {
    'isYear': 2022,
    'isGrade': 'College Freshman'
  },
  {
    'isYear': 2023,
    'isGrade': 'College Sophmore'
  },
  {
    'isYear': 2025,
    'isGrade': 'College Junnior'
  },
  {
    'isYear': 2026,
    'isGrade': 'College Senior'
  }
];

var userMonth = prompt('Enter graduation month, please');
var userYear = prompt('Enter graduation year, please');

function welcomeStudent() {

  if ((!(userMonth == 'May' || userMonth == 'December'))
   || (userYear > 2026)) {
    alert('Try again!');
    return false;
  } {
    for (var i = 0; i < grads.length; i++) {
      var graduatesClass = grads[i].isYear;
      if (userYear == graduatesClass) {
        alert("You will be a " + grads[i].isGrade + " graduating in " + userMonth + " " + graduatesClass + "!");
        return false;
      }
    }
  }
  alert('Please try again');
  return false;

}

welcomeStudent();


// TODO STEP 1: Creating Your First Object: the Teacher Object

var teacher = {
    'name': 'Squidward',
    'department': 'Business Management',
    'ratings': [3.4, 5, 4.2],
    'addTeacherRating': function newRating() {
      this.(parseInt(userReview, 10)).toFixed(2)) newRating()
  },
  'averageTeacherRating': getAvgRating(userReview) {
    //what do I use this. with?
    rating.push(userReview);
    var sum = 0;
    for (var i = 0; i < rating.length; i++) {
      (sum += rating[i]);
    }
    console.log(sum / rating.length);
    return sum / rating.length;
  }

  // ou now need to call your addRating property on your teacher object and only pass in the userRating.
// Also test to make sure the addRating function is still working, along with the getAvgRating function by printing
 // out the avg rating before and after you add the new rating.







 var userReview = prompt('We would like for you to review your teacher. Please enter a rating between 0 - 5');
 var teacher = {
     name: 'Squidward',
     department: 'Business',
     rating: [4.5,3.2,2.0,5],

     // addRating: function(addTeacherRating){
     // this.rating.push(userReview);
       // },
        addRating: function() {
         this.rating.push(userReview);
         // addTeacherRating(userReview);
         // console.log(this.rating);
       }
       ,

     getAvgRating: function() {
       // this.rating.push(userReview);
       var sum = 0;
         for (var i = 0; i < this.rating.length; i++) {
         (sum += this.rating[i]);
          }
          // console.log(sum/this.rating.length);
       return sum/this.rating.length;
                 },


     getRating: function() {
       console.log(this.getAvgRating);
         if  (userReview > 0 && userReview <= 5) {
               alert('Thanks for you review! Your teacher now has an average rating of ' + getAvgRating(parseInt(userReview, 10)).toFixed(2));
         } else {
               prompt('Please enter a rating between 0 - 5');
                   }
                   console.log(this.getAvgRating);
    }
 };







 var userReview = prompt('We would like for you to review your teacher. Please enter a rating between 0 - 5')
 function promptRating(userReview) {
       if  ((userReview > 0) && (userReview <= 5)) {
       alert('Thanks for you review! Your teacher now has an average rating of ' + getAvgRating(parseInt(userReview, 10)).toFixed(2));
     } else {
      prompt('Please enter a rating between 0 - 5');
      console.log(promptRating(getAvgRating));
   }
 }

 var teacher = {
   teacherName: 'Squidward',
   deptName: 'Business',
   rating: [3.4, 5.0, 4.2],
     getAvgRating: function() {
       this.rating.push(userReview);
       var sum = 0;
         for (var i = 0; i < this.rating.length; i++) {
         (sum += this.rating[i]);
          }
          console.log(sum/this.rating.length);
       return sum/this.rating.length;
     }

     // addTeacherRating: function(userReview) {
     //   this.rating.push(userReview);
     //   console.log(this.rating);
     // }
 }
