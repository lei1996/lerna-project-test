function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var buttonStyle = {
  padding: '10px 20px'
};

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: "btn btn-default",
    style: buttonStyle,
    onClick: props.handleClick
  }, props.label);
};

Button.defaultProps = {
  onClick: function onClick() {},
  label: ''
};

module.exports = Button;
//# sourceMappingURL=index.js.map
