angular.module('clients').filter('isEvenN', function() {
        return function(input){
            var list = [];
            angular.forEach(input, function(i, id){
                if(i.id % 2 == 0){
                        list.push(i);
                    }
            });
            return list;
            }
    });

angular.module('clients').filter('inputErrors', function() {
    return function(input){

          var arrayToReturn = [];
          if (input === undefined) return arrayToReturn;


           var messageError = '';

                    if(input.required == true){
                        messageError = messageError + "<i class=\"icon-remove\"></i>Required";
                        }
                    if(input.pattern == true){
                        messageError = messageError + "<i class=\"icon-remove\"></i>Only Letters";
                        }
                    if(input.maxlength == true){
                        messageError = messageError + "<i class=\"icon-remove\"></i>Too many";
                        }
                    if(input.minlength == true){
                        messageError = messageError + "<i class=\"icon-remove\"></i>Need more";
                        }
                    if(input.required == false && input.pattern == false && input.maxlength == false && input.minlength == false){
                        messageError = "<i class=\"icon-ok\"></i>It's okay";
                        }

            return "<div>" + messageError + "</div>";
            //return "<ul>" + messageError + "</ul>";




        }
});

/*
angular.module('clients').filter('inputErrors', function() {
    return function(input){

          var arrayToReturn = [];
          if (input === undefined) return arrayToReturn;


           var messageError = '';

                    if(input.required == true){
                        messageError = messageError + "<i class=\"icon-remove\"></i>Required";
                        }
                    if(input.pattern == true){
                        messageError = messageError + "<i class=\"icon-remove\"></i>Only Letters";
                        }
                    if(input.maxlength == true){
                        messageError = messageError + "<i class=\"icon-remove\"></i>Too many";
                        }
                    if(input.minlength == true){
                        messageError = messageError + "<i class=\"icon-remove\"></i>Need more";
                        }
                    if(input.required == false && input.pattern == false && input.maxlength == false && input.minlength == false){
                        messageError = "<i class=\"icon-ok\"></i>It's okay";
                        }

            return "<div>" + messageError + "</div>";
            //return "<ul>" + messageError + "</ul>";




        }
});
*/

/*
angular.module('clients').filter('inputErrors', function() {
    return function(input){

          var arrayToReturn = [];
          if (input === undefined) return arrayToReturn;


           var messageError = '';

                    if(input.required == true){
                        messageError = messageError + "Required";
                        }
                    if(input.pattern == true){
                        messageError = messageError + "Only Letters";
                        }
                    if(input.maxlength == true){
                        messageError = messageError + "Too many";
                        }
                    if(input.minlength == true){
                        messageError = messageError + "Need more";
                        }
                    if(input.required == false && input.pattern == false && input.maxlength == false && input.minlength == false){
                        messageError = "It's okay";
                        }

            return messageError;




        }
});


});
*/
