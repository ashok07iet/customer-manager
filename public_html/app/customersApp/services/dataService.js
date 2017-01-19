(function () {

    var injectParams = ['customersService'];

    var dataService = function (customersService) {
        return  customersService;
    };

    dataService.$inject = injectParams;

    angular.module('customersApp').factory('dataService', dataService);

}());

