'use strict';

angular.module('angularMiddle', [])
  .directive('middle', function () {
    return {
      template:
        '<div class="middle-wrapper">' +
          '<div class="middle-wrapper2" ng-transclude></div>' +
        '</div>',
      restrict: 'A',
      transclude: true,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
