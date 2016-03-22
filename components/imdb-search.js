(function(app) {

  app.ImdbSearchComponent = 
    ng.core
    .Component({
      selector: 'imdb-search',
      templateUrl: 'partials/search.html',
      viewProviders: [app.ImdbService],
      pipes: [app.MovieFilterPipe]
    })
    .Class({
      constructor: [app.ImdbService, function(imdbService) {
		this._imdbService = imdbService;
		this.name="The name!!!";
	}],
        searchBasicImdb: function(){
	  var self = this;
	  self.imdbdata=[];
          this._imdbService.basicSearch(this.imdbquery).subscribe(
       		function (data) {
                   self.imdbdata = data;
                },
                function (err) {
                }
          );
        },
	refToIcaledImg200: function(imdburl){
   		return imdburl.replace('.jpg','UX200_CR0,0,200_AL_.jpg');
	}
    });

})(window.app || (window.app = {} ));


