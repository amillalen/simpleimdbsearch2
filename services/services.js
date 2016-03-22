(function(app) {
  app.ImdbService = ng.core.
  Injectable()
   .Class({
       constructor: [ng.http.Http, function(http) {
            this.endpoint_url = "imdbapi/imdbapi.php?api=v1&appid=iphone1&locale=es_CL&device=0&sig=app1";
            this.http = http;
       }],
       basicSearch : function(imdbquery){
	  return this.http.get(this.endpoint_url +"&method=find&q="+imdbquery).map(
                function(res){
                    res = res.json();
                    return res;
                }
            );          
       }
    });
})(window.app || ( window.app = {} ));
