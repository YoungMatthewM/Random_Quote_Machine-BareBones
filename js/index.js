function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "urjwtsnybLmshA3tIEWQf1nlREPhp1LWGNQjsnxj1ZyDzJ60BV",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=count=1",
    success: function(data) {
      //$('#my-quote').html(data);
      data = JSON.parse(data);
      myHtml = '<strong>"' + data.quote.toString() + '"</strong> - ' + data.author.toString();
      $('#my-quote').html(myHtml);
      myHtml = '"' + data.quote.toString() + '" - ' + data.author.toString();
      myHtml = encodeURIComponent(myHtml);
      myHtml = 'https://twitter.com/intent/tweet?text=' + myHtml;
      $('#quote-tweet').attr('data-url',myHtml);
      //console.log(myHtml);
    }
  });
}

function tweetQuote(){
  var url ="";
  url = $('#quote-tweet').attr('data-url');
  //console.log(url);
  window.open(url)
}

$(document).ready(getQuote);
$('#quote-refresh').click(getQuote);
$('#quote-tweet').click(tweetQuote);