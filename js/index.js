$(document).ready(function() {
  generateQuote()
});

$("#quote-btn").on("click", function(){ 
  generateQuote()
});

$("#twitter-btn").on("click", function(){
  var quote = encodeURIComponent($("#quote").text().trim())
  var byline = encodeURIComponent($("#byline").text())
  var url = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22" + quote + "%22%20" + byline;

  var win = window.open(url, '_blank');
  if (win) {
      win.focus();
  } else {
      alert('Please allow popups for this website');
  }
});

function generateQuote() {
    $.ajax({
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      success: function(data) {
        $("#quote").html(data[0].content)
        $("#byline").html("&mdash; " + data[0].title)
      }, 
      cache: false
    });
}