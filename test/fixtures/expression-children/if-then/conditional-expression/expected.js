var _jsxWrapper = function _jsxWrapper(func, args) {
  return {
    __jsxDOMWrapper: true,
    func: func,
    args: args
  };
};

var _hasOwn = Object.prototype.hasOwnProperty;

var _forOwn = function _forOwn(object, iterator) {
  for (var prop in object) {
    if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
  }
};

var _renderArbitrary = function _renderArbitrary(child) {
  var type = typeof child;

  if (type === "number" || type === "string" || type === "object" && child instanceof String) {
    text(child);
  } else if (Array.isArray(child)) {
    child.forEach(_renderArbitrary);
  } else if (type === "object") {
    if (child.__jsxDOMWrapper) {
      var func = child.func,
          args = child.args;

      if (args) {
        func.apply(this, args);
      } else {
        func();
      }
    } else if (String(child) === "[object Object]") {
      _forOwn(child, _renderArbitrary);
    }
  }
};

var _div$wrapper = function _div$wrapper() {
  return elementVoid("div");
};

function getDiv() {
  elementOpen("div");
  text("Bottom");
  return elementClose("div");
}

function render() {
  elementOpen("div");

  _renderArbitrary(true ? (elementOpen("div"), (elementOpen("div"), text("Top"), elementClose("div")), _renderArbitrary(getDiv()), elementClose("div")) : elementVoid("other"));

  _renderArbitrary(_jsxWrapper(_div$wrapper) ? 1 : 2);

  return elementClose("div");
}