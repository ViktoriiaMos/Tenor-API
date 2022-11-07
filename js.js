$(document).ready(function(){
    var apikey = "LIVDSRZULELA";
  $('.search').click(function(){
        $(".searched_content").empty();
        var term = $(".text").val();
        var num = $(".numbers").val();
        var url = "https://g.tenor.com/v1/search?q="
         + term + "&key=" + apikey + "&limit=" + num;  
// console.log(url)
   
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
    //   console.log(myArr);
      var i = 0;
      while(i < myArr["results"].length){
      var src =  myArr["results"][i]["media"][0]["tinygif"]["url"];
     $(".searched_content").append("<img class='pic'src="+src+">")
      i++;
    }
    }
};
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.clear();
  });  
});