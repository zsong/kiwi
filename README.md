Kiwi
====

Kiwi is a light-weight JavaScript module for string interpolation.

Example
===

 * API

```javascript
Kiwi.compose(<input_string>, <array of the strings to interpolate>);
Kiwi.compose(<input_string>, <json object>);
```

 * Use **% (percentage symbol)** as the place holder.

```javascript

var input = "The quick brown % jumps over the lazy %.";
var result = Kiwi.compose(input, ["fox", "dog"]);
console.log(result);

//Output: The quick brown fox jumps over the lazy dog.

```
 
 * Use **` (grave accent symbol)** to escape the % symbol.

```javascript

var input = "The % is 50`%.";
var result = Kiwi.compose(input, ["chance"]);
console.log(result);

//Output: The chance is 50%.

```

 * You can also do key-value interpolation like this

```javascript

var input = "The quick brown %{f} jumps over the lazy %{d}.";
var data_obj = {"f": "fox", "d": "dog"};
var result = Kiwi.compose(input, data_obj);
console.log(result);

//Output: The quick brown fox jumps over the lazy dog.

SYNTAX ERROR will be thrown if the input string contains non-matching curly brackets.

```
