(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.ImdbSearchComponent, [ng.http.HTTP_PROVIDERS]);
  });

})(window.app || (window.app = {} ));


