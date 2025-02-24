// current year
const todaysdate = new Date();
const year = todaysdate.getFullYear();
document.getElementById('current-year').innerHTML = ('&copy') + year;



// last modified date
   document.getElementById('lastmodified').innerHTML = "This page was las modified on: " + document.lastModified;
