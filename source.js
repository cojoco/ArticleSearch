var word = $( "#search" ).value;
console.log(word);

var myurl = "http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?q=" + word + "&api-key=d8a310ff4bda32f06c0a5b2634ade6fc:16:73061887";
$.ajax({
  url: myurl,
  crossDomain: true,
  dataType: "jsonp",
  jsonp: 'callback',
  jsonpCallback: "svc_search_v2_articlesearch",
  success: function(data) {
    console.log(data);
  },
  error: function(jqxHR, status, errorThrown) {
    console.log(jqxHR);
  }
});
