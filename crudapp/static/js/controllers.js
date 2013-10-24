'use strict';

/*
+ Переделать на одно окно добавленя/редактирования.
+ Удалить лишнии функции.
- Форма в отдельный файл - можно сделать с помощью AngularStrap, если Angular UI, то нельзя.
+ Фильтр для массива clients - показывать только тех, у кого ID четное.
+ Валидация элементов формы:
    + Запрет на отправку формы, если она не валидна по какому-либо из полей.
    + Тултипы с ошибками возле полей по примеру http://jsfiddle.net/adamdbradley/Qdk5M/
    + Имя фамилия от 2 до 16.
    + Возраст от 1 до 3.
*/

angular.module('clients').controller('ClientsList', function($scope, $http, $dialog, Client, $templateCache, $compile, $position) {

    $scope.client = new Client();

    $scope.getclient = function(id) {
            Client.get(id).then(function(data){$scope.client = data});
        }

    var getClients = function() {
            Client.get("").then( function(data) { $scope.data = data;} );
        }

    $scope.addClientWrap = function(){
            $scope.addClientModal = true;
        }

    $scope.editIdSetNew = function(id) {
            $scope.getclient(id);
            $scope.addClientModal = true;
        }

    $scope.sendData = function(id) {
            if($scope.client.id != null){
                $scope.client.edit().then( function(data) {
                    $scope.client = new Client();
                    $scope.client.id = null;
                    $scope.addClientModal = false;
                    getClients();
                });
            }
            else{
                $scope.client.add().then( function() {
                    $scope.client = new Client();
                    $scope.client.id = null;
                    $scope.addClientModal = false;
                    getClients();
                });
            }
        }

    $scope.deleteIdSetNew = function(id) {
            var client = new Client();
            var id = id;
            var title = 'Delete?';
            var msg = 'Sure?';
            var btns = [{result:false, label: 'Cancel'}, {result:true, label: 'Delete', cssClass: 'btn-primary'}];

            $dialog.messageBox(title, msg, btns)
            .open()
            .then(function(result){
                if(result == true){
                    client.delete(id).then( function(data) {
                    getClients();
                });
                }
            });
        }

    getClients();

    $scope.openTrig = function() {

        }
    $scope.closeTrig = function() {

        }

    var re1='.*?';
    var re2='((?:[a-z][a-z]+))';
    $scope.nameReg=new RegExp(re1+re2,["i"]);

    var re1='.*?';
    var re2='\\d+';
    var re3='.*?';
    var re4='(\\d+)';
    $scope.numReg = new RegExp(re1+re2+re3+re4,["i"]);

    });


