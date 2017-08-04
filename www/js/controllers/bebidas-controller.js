app.controller('BebidasCtrl', function($scope, CardapioServices) {

    //mock de bebidas
    $scope.bebidas = CardapioServices.getBebidas();

});