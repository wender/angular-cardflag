# Card Flag directive for [AngularJS](http://angularjs.org/)

***

AngularJS directive to automatically show credit card flags while typing


[DEMO](http://wender.github.io/angular-cardflag/)

This directive will look for attribute "creditcard-flag" on an input field, will add a class card-flag and a SPAN with a class "_flag" after it,
when you start typing a number, it will add a class corresponding to the Credit Card brand.

All the magic happens in your CSS

## Example: 
```HTML
<div class="form-group creditcard">
	<input 	type="text" 
			class="form-control" 
			id="example1" 
			ng-model="field.example1" 
			placeholder="Credit Card Number"
			maxlengh="19" 
			angular-mask="0000-0000-0000-0000" 
			creditcard-flag />
</div>

<style>
.card-flag + ._flag {
        background: url(card-flag-highlight.png) no-repeat top left;
        width: 50px;
        height: 30px;
        display: none;
        position: absolute;
        top: 2px;
        right: -55px;
    }

    .card-flag.card-flag-amex + ._flag {
        background-position: 0 0;
        display: inline-block; }

    .card-flag.card-flag-diners + ._flag {
        background-position: 0 -160px;
        display: inline-block; }

    .card-flag.card-flag-elo + ._flag {
        background-position: 0 -240px;
        display: inline-block; }

    .card-flag.card-flag-hipercard + ._flag {
        background-position: 0 -320px;
        display: inline-block; }

    .card-flag.card-flag-master + ._flag {
        background-position: 0 -400px;
        display: inline-block; }

    .card-flag.card-flag-visa + ._flag {
        background-position: 0 -480px;
        display: inline-block; }

    .card-flag.card-flag-hiper + ._flag {
        background-position: 0 -556px;
        display: inline-block;}
    .creditcard {
        width: 180px;
        position: relative;
    }
</style>
<script type="text/javascript">
    var app = angular.module('wender', ['angularMask','angular-creditcard-flag']);
    app.controller('MainCtrl', function($scope) {
        $scope.field = {
            example1: null
        };
    });
</script>
```

#### Install via bower

    bower install angular-creditcard-flag --save