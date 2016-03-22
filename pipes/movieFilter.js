(function (app) {
    app.MovieFilterPipe = ng.core
        .Pipe({
            name: 'movieFilter'
        })
        .Class({
	 constructor: [function () {
	        }],

            transform: function(value){
		    return value.filter(item => {
			return item.title;    
		      });
            }
        });
})(window.app || (window.app = {}));
