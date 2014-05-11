esprima-ast-equality
=================


test helper for asserting ast equality.

Errors thrown include correct details so that Mocha and friends to display nice diffs.

Usage
-----

```js
var astEqual = require('esprima-ast-equality');
astEqual('function(){ 1 + 2; }', 'function() { 1 + 3; }');
```

