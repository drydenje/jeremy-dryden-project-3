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
   $('#new-snippet').on('click', function() {
      console.log("new");
   });
   
   $('#delete-snippet').on('click', function() {
      console.log("delete");
   });
   
   $('#save-snippet').on('click', function() {

   });
   // CRUD Buttons End
   

   // Navigation Buttons Start
   $('#button-first').on('click', function() {
      console.log("first");
   });
   
   $('#button-previous').on('click', function() {
      console.log("previous");
   });
   
   $('#button-next').on('click', function() {
      console.log("next");
   });
   
   $('#button-last').on('click', function() {
      console.log("last");
   });
   // Navigation Button End
});
