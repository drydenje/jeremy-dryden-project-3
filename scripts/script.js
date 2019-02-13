const myapp = {};

// Title, Code, ID
myapp.snippets = [];


myapp.saveSnippet = function(snippet) {
   this.snippets.push(snippet);
   console.log(myapp.snippets);
};



$(function() {
   $('form').on('submit', function(e) {
      // Prevent the form from submitting
      e.preventDefault();
   });
   
   // CRUD Buttons Start
   $('#newSnippet').on('click', function() {
      console.log("new");
   });
   
   $('#deleteSnippet').on('click', function() {
      console.log("delete");
   });
   
   $('#saveSnippet').on('click', function() {
      console.log("save");
   });
   // CRUD Buttons End
   

   // Navigation Buttons Start
   $('#buttonFirst').on('click', function() {
      console.log("first");
   });
   
   $('#buttonPrevious').on('click', function() {
      console.log("previous");
   });
   
   $('#buttonNext').on('click', function() {
      console.log("next");
   });
   
   $('#buttonLast').on('click', function() {
      console.log("last");
   });
   // Navigation Button End
});
