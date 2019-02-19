const myapp = {};

// Title, Code
myapp.snippets = [];
myapp.current = 0;
// default data for book, identation is strange so that it
// will display correctly
myapp.defaultData = [
   {
      title: 'Smooth Scroll',
      code:
         `html {
   scroll-behavior: smooth;
}`
   },
   {
      title: 'Gradient: Yellow Radial',
      code:
         `.gradient {
  background-image:
    radial-gradient(
      yellow,
      #f06d06
    );
}`
   },
   {
      title: 'Hexagon with Shadow',
      code:
         `
<div class="hexagon"><span></span></div>

.hexagon {
  width: 100px;
  height: 55px;
  position: relative;
}

.hexagon, 
.hexagon:before, 
.hexagon:after {
  background: red;
  box-shadow: 0 0 10px rgba(0,0,0,0.8);   
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  left: 22px;
  width: 57px;
  height: 57px;
  transform: rotate(145deg) skew(22.5deg);
}

.hexagon:before {
  top: -29px;
}

.hexagon:after {
  top: 27px;
}

.hexagon span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 55px;
  background: red;
  z-index: 1;
}`
   }, {
      title: 'Disorganized Paper Stack - CSS Tricks',
      code:
         `<div class="paper"></div>

.paper {
  background: #fff;
  padding: 30px;
  position: relative;
}

.paper,
.paper::before,
.paper::after {
  /* Styles to distinguish sheets from one another */
  box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
  border: 1px solid #bbb;
}

.paper::before,
.paper::after {
  content: "";
  position: absolute;
  height: 95%;
  width: 99%;
  background-color: #eee;
}

.paper::before {
  right: 15px;
  top: 0;
  transform: rotate(-1deg);
  z-index: -1;
}

.paper::after {
  top: 5px;
  right: -5px;
  transform: rotate(1deg);
  z-index: -2;
}`
   }
];

myapp.saveSnippet = function(snippet) {
   this.snippets.push(snippet);
};

myapp.removeSnippet = function(id) {
   this.snippets.splice(Number.parseInt(id), 1);
}

myapp.loadSnippet = function(id) {
   // if an id is passed, return that snippet
   if(id) {
      return this.snippets[id];
   } else {
      // else, return the current snippet
      return this.snippets[myapp.current];
   }
}

// load the snippet collection from memory or the dummy data
myapp.loadSnippetArray = function() {
   myapp.loadDefaultSnippets();
}

// A default array of data for testing and demo
myapp.loadDefaultSnippets = function() {
   myapp.snippets = myapp.defaultData;
}

// moving the current snippet pointer around
myapp.moveToSnippet = function(command) {
   switch (String(command).toLowerCase()) {
      case "first":
         myapp.current = 0;
         myapp.loadSnippet();
         break;
      case "previous":
         if(myapp.current > 0)
            myapp.current = myapp.current - 1;
         myapp.loadSnippet();
         break;
      case "next":
         if(myapp.current < myapp.snippets.length - 1)
            myapp.current += 1;
         myapp.loadSnippet();
         break;
      case "last":
         myapp.current = myapp.snippets.length - 1;
         myapp.loadSnippet();
         break;
      default:
         // nothing
   }
   console.log("current:" + myapp.current);
}

$(function() {
   let $snippetTitle    = $('#snippet-title');
   let $snippetCode     = $('#snippet-code');

   // let $chevronFirst    = $('button-first');
   // let $chevronPrevious = $('button-previous');
   // let $chevronNext     = $('button-next');
   // let $chevronLast     = $('button-last');

   // load defaults
   myapp.loadSnippetArray();
   
   const loadCard = function() {
      if(myapp.loadSnippet(myapp.current)) {
         $snippetTitle.val(myapp.loadSnippet(myapp.current).title);
         $snippetCode.val(myapp.loadSnippet(myapp.current).code);
      }
   }

   // load the card at the start of the program
   loadCard();

   $('form').on('submit', function(e) {
      // Prevent the form from submitting
      e.preventDefault();
   });

   
 

   // Navigation Buttons Start
   $('#button-first').on('click', function() {
      myapp.moveToSnippet("first");
      loadCard();
   });
   
   $('#button-previous').on('click', function() {
      myapp.moveToSnippet("previous");
      loadCard();
   });
   
   $('#button-next').on('click', function() {
      myapp.moveToSnippet("next");
      loadCard();
   });
   
   $('#button-last').on('click', function() {
      myapp.moveToSnippet("last");
      loadCard();
   });

   $('#can-i-use').on('click', function() {
      // alert($('#snippet-code').selection());
      window.open(`https://caniuse.com/#search=${$('#snippet-code').selection()}`);
   });
   // Navigation Button End


   // CRUD Buttons Start
   $('#new-snippet').on('click', function () {
      $snippetTitle.val('');
      $snippetCode.val('');
   });

   // todo: not quite working yet
   $('#delete-snippet').on('click', function () {
      myapp.removeSnippet(myapp.current);
   });

   $('#save-snippet').on('click', function () {
      const snippetObject = {
         title: $snippetTitle.val(),
         code: $snippetCode.val()
      }
      myapp.saveSnippet(snippetObject);
   });
   // CRUD Buttons End
});
