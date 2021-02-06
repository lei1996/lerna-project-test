import React from 'react';

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

export default Button;
//# sourceMappingURL=index.modern.js.map
