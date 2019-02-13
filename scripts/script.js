const myapp = {};

myapp.snippets = [];



$(function() {
   $('form').on('submit', function(e) {
      e.preventDefault();
   });
   
   $('#newSnippet').on('click', function() {
      console.log("new");
   });
   
   $('#deleteSnippet').on('click', function() {
      console.log("delete");
   });
   
   $('#saveSnippet').on('click', function() {
      console.log("save");
   });
   

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
