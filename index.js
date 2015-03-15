function EqualityError(message, actual, expected) {
  this.message = message;
  this.actual = actual;
  this.expected = expected;
  this.showDiff = true;
  Error.captureStackTrace(this, module.exports);
}

EqualityError.prototype = Object.create(Error.prototype);
EqualityError.prototype.name = 'EqualityError';
EqualityError.prototype.constructor = EqualityError;

var assert = require('assert');
var parser = require('acorn-babel');

module.exports = function(actual, expected, message) {
  var parsedActual   = parser.parse(actual,   { ecmaVersion: 6 });
  var parsedExpected = parser.parse(expected, { ecmaVersion: 6 });

  var seemEqual = JSON.stringify(parsedActual) === JSON.stringify(parsedExpected);

  if (!seemEqual) {
    throw new EqualityError(message || "AST equality failed",
      parsedActual,
      parsedExpected
    );
  }
};
