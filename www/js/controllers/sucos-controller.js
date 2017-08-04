app.controller('SucosCtrl', function($scope, CardapioServices) {

    $scope.sucos = CardapioServices.getSucos();
    
});