$( document ).ready(function() {
  
  $("#cat").click(function () {
  $("#cat").hide();  
    for (var i = 0; i < 101; i = i +1) {
        $("body").append("<img src=https://cdn-webimages.wimages.net/051823d5bcf3a040540832900c09c23bd2e679-wm.jpg?v=3>");
    }
    
});

$("#submit").click(function () {
    var answer = $("input").val();
    
    if (answer==="yellow") {
    alert("Correct"); 
    }
    
    else {
    alert("Wrong");
    }
        
});
});