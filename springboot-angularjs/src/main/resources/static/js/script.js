/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global angular */
(function () {

    var app = angular.module('app', []);

    app.controller('SidebarController', function ($scope) {

        $scope.state = false;

        $scope.toggleState = function () {
            $scope.state = !$scope.state;
        };

    });

    app.directive('sidebarDirective', function () {
        return {
            link: function (scope, element, attr) {
                scope.$watch(attr.sidebarDirective, function (newVal) {
                    if (newVal)
                    {
                        element.addClass('show');
                        return;
                    }
                    element.removeClass('show');
                });
            }
        };
    });


}())

