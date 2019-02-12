// 1. Have an array of data structures
// 2. Randomly select a single structure
// 3. Randomly select part of the structure
// 4. Pick a random action/method you could perform on the data
// 5. Show the user a)the supplied code, b) what the final result should look like
// 6. Take the users supplied answer and compare it to the final result
// 7. 


const questionArray = {
   // given this code
   given: `a = 3;`, // populate the textbox? can you make part of it un-editable?
   answer: `a + 2;`,
   expected: 5,
   getUsersAnswer: function () {
      // pull code from the text box
      return 'a + 2;'
   },
   generateExecutable: function() {
      return `${this.given}${this.getUsersAnswer()}`;
   }
}

console.log(questionArray.generateExecutable());