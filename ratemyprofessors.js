// ==UserScript==
// @name         Temple rate my professor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  replace links to emails to links to ratemyprofessors.com
// @author       icycoldveins
// @icon         none
// @grant        none
// @license     MIT
// @match      *://*.prd-xereg.temple.edu/*
// ==/UserScript==

// clicking on the email of instructor redirects to there rate my professor page
//<a class="email" aria-haspopup="true" data-index="0" href="mailto:tuk51364@temple.edu" tabindex="-1">Dana Zeuggin</a>
(function () {
  "use strict";
  //run this functino on click of button

  // Your code here...
  //<a class="email" aria-haspopup="true" data-index="0" href="mailto:tuk51364@temple.edu" tabindex="-1">Dana Zeuggin</a>
  //example of what the email looks like to extract the text from the a.email tag and use it
  //to create a link to ratemyprofessor.com with the name of the professor as the link for the class a

  // get all the a.email tags
  //run on click of button
  var btn = document.createElement("button");
  //put button on top right of page
  btn.style.position = "fixed";
  btn.style.top = "30";
  btn.style.right = "0";
  // mvoe buttoin down

  btn.innerHTML = "Rate My Professors";
  document.body.appendChild(btn);
  // only first and last name
  btn.addEventListener("click", function () {
    var allEmails = document.getElementsByClassName("email");
    // for each email
    // make new array to hold name of professor and link to ratemyprofessor.com
    //create one button that will open all the links in new tabs
    //create a new array to hold the links
    var links = [];
    for (var i = 0; i < allEmails.length; i++) {
      // get the text of the email
      var email = allEmails[i].innerHTML;
      // split the text into an array of first and last name note: middle name is included
      var name = email.split(" ");
      // create a link to ratemyprofessors.com with the first and last name
      var link =
        "https://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&schoolName=temple+university&queryoption=HEADER&query=" +
        name[0] +
        "+" +
        name[name.length - 1] +
        "&facetSearch=true_";
        // add the link to the array
        links.push(link);
    }
    //now all these links will be opened in new tabs
    for (var i = 0; i < links.length; i++) {
        window.open(links[i]);
        }
  });
})();
