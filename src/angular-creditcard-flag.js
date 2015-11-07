'use strict';

angular.module('angular-creditcard-flag',[])
    .directive('creditcardFlag', function() {
      return {
        restrict: 'A',
        link: function($scope, el) {
            el.addClass('card-flag');
            el[0].insertAdjacentHTML('afterend','<span class="_flag"></span>');
            function flag(el) {
                var c = {
                    'amex' : [34,37],
                    'visa' : [4],
                    'master' : [51,52,53,54,55],
                    'diners' : [300,301,302,303,304,305,2014,2149,36],
                    'hipercard' : [38],
                    'aura' : [50],
                    'elo' : [63]
                };
                var matched = false;
                for(var a in c){
                    if(!matched)
                        for(var b in c[a]){
                            var r = new RegExp("^"+c[a][b]);
                            var remove = el[0].className.match(/\b(card-flag)\.?[^\s]+/g);
                            var css = el[0].className;
                            if(el[0].value.match(r)){
                                matched = true;
                                el[0].className = css.replace(remove,'').concat(' card-flag-'+a);
                                break;
                            }else{
                                el[0].className = css.replace(remove,'');
                            }
                        }
                    }
                }

                el.bind('keyup keydown blur', function(e) {
                    flag(el);
                });
            }
        };
});

