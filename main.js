var http = new XMLHttpRequest();

var url_ = "car.html";
http.open("GET", url_, true);
http.onreadystatechange = function(){
   if(http.readyState == 4){
      var html = http.responseText;
      html = new DOMParser().parseFromString(html, "text/html");
      document.getElementById('#cpr').innerHTML = html.getElementById('#p1').innerHTML.trim();
   }
}
http.send(null);