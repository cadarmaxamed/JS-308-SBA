const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  console.log(CourseInfo);
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  console.log(LearnerSubmissions);
//////////////////////////


//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  
  //new code
  // const Result2 = {}
  
  
  // console.log(Result2);
  
  //   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
 //   console.log(result);
  


// let learnersIdScore = LearnerSubmissions.map(id => ({learner_id: id.learner_id , submission_score: id.submission.score}));
//   console.log(learnersIdScore);

// let possible_points = AssignmentGroup.assignments.map(points  => ({points_possible: points.points_possible}))
//   console.log(possible_points);


// let submission_score = LearnerSubmissions.map(id => ({submission_score: id.submission.score}));
//   console.log(submission_score);

// HHHHH
let result1 = LearnerSubmissions.map(key => {


  return { "learner_id": key.learner_id,
           "avg": key.submission.score,
          "id": key.assignment_id
  }
  })

  console.log(result);

  // let newresult = result.split
  // console.log(newresult);

//   id :  learner_ID
// avg: (first_assignment + second_assignment ) / (first_assignment_possible_score + second_assignment_possible_score),
// first_assignment_id : ( first_assignment / first_assignment_possible_score) take away 10% if late,
// second_assignment_id : ( second_assignment / second_assignment_possible_score )take away 10% if late

// //new comment