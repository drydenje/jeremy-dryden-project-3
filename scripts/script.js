const myapp = {};

// Title, Code
myapp.snippets = [];


myapp.saveSnippet = function(snippet) {
   this.snippets.push(snippet);
   // console.log(myapp.snippets);
};

myapp.removeSnippet = function(id) {
   this.snippets.splice(Number.parseInt(id), 1);
   // console.log(myapp.snippets);
}

$(function() {
   let $snippetTitle    = $('#snippet-title');
   let $snippetCode     = $('#snippet-code');

   // let $chevronFirst    = $('button-first');
   // let $chevronPrevious = $('button-previous');
   // let $chevronNext     = $('button-next');
   // let $chevronLast     = $('button-last');

   $('form').on('submit', function(e) {
      // Prevent the form from submitting
      e.preventDefault();
   });
   
   // CRUD Buttons Start
   $('#new-snippet').on('click', function() {
      $snippetTitle.val('');
      $snippetCode.val('');
   });
   
   $('#delete-snippet').on('click', function() {
      myapp.removeSnippet(1);
   });
   
   $('#save-snippet').on('click', function() {
      const snippetObject = {
         title: $snippetTitle.val(),
         code: $snippetCode.val()
      }
      myapp.saveSnippet(snippetObject);
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
