var word = "Trump";

var myurl = "http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?q=" + word + "&api-key=d8a310ff4bda32f06c0a5b2634ade6fc:16:73061887";
$.ajax({
  url: myurl,
  crossDomain: true,
  dataType: "jsonp",
  jsonp: 'callback',
  jsonpCallback: "svc_search_v2_articlesearch",
  success: function(data) {
    for (var i = 0; i < 10; i++) {
      var curArticle = "#article" + (i+1);
      var curSnippet = data.response.docs[i].snippet;
      var curUrl = data.response.docs[i].web_url;
      $(curArticle).html(curUrl + "<br>" + curSnippet);
    }
  }
  
});
