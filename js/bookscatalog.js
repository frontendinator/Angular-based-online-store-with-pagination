var bookcatal = angular.module('catalBooks', ['angularUtils.directives.dirPagination']);
bookcatal.controller('mycatalBooks', function($scope, $http) {
    $http.get("js/bookcatalog.json").then(function(response) {
        $scope.books = response.data.books;
    });
    $scope.currentPage = 1;
    $scope.pageSize = 10;
});

bookcatal.controller('OtherController', function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
});