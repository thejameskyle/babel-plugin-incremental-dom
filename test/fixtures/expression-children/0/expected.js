var _jsxWrapper = function _jsxWrapper(func, args) {
  return {
    __jsxDOMWrapper: true,
    func: func,
    args: args
  };
};

var _children$wrapper = function _children$wrapper() {
  elementOpen("array");
  text("will be wrapped");
  return elementClose("array");
};

function render() {
  var children = [1, 2, 3, _jsxWrapper(_children$wrapper)];
}