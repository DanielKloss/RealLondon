app.directive('dropdownMultiselect', function () {
    return {
        restrict: 'E',
        scope: {
            model: '=',
            options: '='
        },
        template: "<div class='btn-group' data-ng-class='{open: open}'>" +
         "<button class='btn'>Select Players</button>" +
                 "<button class='btn dropdown-toggle' data-ng-click='open=!open;openDropdown()'><span class='caret'></span></button>" +
                 "<ul class='dropdown-menu' aria-labelledby='dropdownMenu' style='width: 200px'>" +
                     "<li data-ng-repeat='option in options'> <a data-ng-click='setSelectedItem()'>{{option.name}}<span data-ng-class='isChecked(option.id)'></span></a></li>" +
                 "</ul>" +
             "</div>",
        controller: function ($scope) {

            $scope.setSelectedItem = function () {
                var index = $scope.model.indexOf(this.option);
                if (index > -1) {
                    $scope.model.splice(index, 1);
                } else {
                    $scope.model.push(this.option);
                }
                return false;
            };

            $scope.isChecked = function (id) {
                if ($scope.model.filter(function (obj) { return obj.id == id; }).length > 0) {
                    return 'glyphicon glyphicon-ok pull-right ';
                }
                return false;
            };
        }
    }
});