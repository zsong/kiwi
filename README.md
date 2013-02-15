Kiwi
====

Kiwi is a javascript module which can do string interpolation.

Example
===

 * API

```javascript
Kiwi.compose(<input_string>, <array of the strings to interpolate>);
```

 * Use **% (percentage symbol)** as the place holder.

```javascript

var input = "The quick brown % jumps over the lazy %.";
var result = Kiwi.compose(input, ["fox", "dog"]);
console.log(result);

//Output: The quick brown fox jumps over the lazy dog.

```
 
 * Use **` (Grave accent symbol)** to escape the % symbol.

```javascript

var input = "The % is 50`%.";
var result = Kiwi.compose(input, ["chance"]);
console.log(result);

//Output: The chance is 50%.

```

 * You can also do key-value interpolate like this

```javascript

var input = "The quick brown %{f} jumps over the lazy %{d}.";
var data = {"f": "fox", "d": "dog"};
var result = Kiwi.compose(input, data);
console.log(result);

//Output: The quick brown fox jumps over the lazy dog.

SYNTAX ERROR will be thrown if the input string contains non-matching curly brackets.

```
