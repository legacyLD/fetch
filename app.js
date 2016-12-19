console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var fetch = false;
  $('#fetch').click(function(){
    fetch = true;
    alert("Fetch is " + fetch + ". America is fetch again.")
  });
});
