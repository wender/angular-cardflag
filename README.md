# Card Flag directive for [AngularJS](http://angularjs.org/)

***

AngularJS directive to automatically show credit card flags while typing


This directive will look for attribute "angular-cardflag" on an input field, will add a class card-flag and a SPAN with a class "_flag" after it,
when you start typing a number, it will add a class corresponding to the Credit Card brand.

All the magic happens on your CSS

## Example: 
```HTML
<input name="test" maxlengh="19" angular-cardflag />
```


## Demo
Do you want to see this directive in action? Visit http://wender.com.br/angular/angular-cardflag.html