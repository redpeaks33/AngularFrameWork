var main = angular.module('myApp', ['ui.router'])
main.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('page-A', {
          url: '/pageA',
          templateUrl: '/pageA.html'
      })
      .state('page-A.page-AA', {
          url: '/pageAA',
          templateUrl: '/pageA/pageAA.html'
      })
      .state('page-A.page-AB', {
          url: '/pageAB',
          templateUrl: '/pageA/pageAB.html'
      })
      .state('page-A.page-AC', {
          url: '/pageAC',
          templateUrl: '/pageA/pageAC.html'
      })
      .state('page-B', {
          url: '/pageB',
          templateUrl: '/pageB.html'
      })
      .state('page-C', {
          url: '/pageC',
          templateUrl: '/pageC.html'
      })
}]);

main.controller('myController',
     ['$scope', function ($scope) {

        $scope.book = function ()
        {
            if (window.sidebar) { // Mozilla Firefox Bookmark
                window.sidebar.addPanel(location.href,document.title,"");
            }
            else if(window.external) { // IE Favorite
                window.external.AddFavorite(location.href,document.title); 
            }
            else if(window.opera && window.print) { // Opera Hotlist
                this.title=document.title;
                return true;
            }
         }
 }]);

//var myApp = angular.module('helloworld', ['ui.router']);

//myApp.config(function ($stateProvider) {
//    var helloState = {
//        name: 'hello',
//        url: '/hello',
//        template: '<h3>hello world!</h3>'
//    }

//    var aboutState = {
//        name: 'about',
//        url: '/about',
//        template: '<h3>Its the UI-Router hello world app!</h3>'
//    }

//    $stateProvider.state(helloState);
//    $stateProvider.state(aboutState);
//});

