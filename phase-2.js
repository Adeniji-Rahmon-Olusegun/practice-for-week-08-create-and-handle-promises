function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  timeLeft -= 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeLeft < 0) {
        reject("Error: you dont have enough time to stretch");
      } else {
        resolve(timeLeft);
        console.log("done stretching");
      }
    });
  });
}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  timeLeft -= 500;
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (timeLeft < 0) {
        reject("Error:  you dont have enough time to run on treadmill");
      } else {
        resolve(timeLeft);
        console.log("done running on treadmill");
      }
    });
  });
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  timeLeft -= 2000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeLeft < 0) {
        reject("Error:  you dont have enough time to lift weights");
      } else {
        resolve(timeLeft);
        console.log("done lifting weights");
      }
    });
  });
}


function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime)
    .then(runOnTreadmill)
    .then(liftWeights)
    .then((timeLeft) => console.log("done working out with", timeLeft / 1000,"seconds left"))
    .catch((err) => console.log(err));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


//workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


//workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


//workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left

//stretch(200);