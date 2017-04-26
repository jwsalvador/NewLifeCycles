import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const TextInput = ({ theme, label, className, ...props }) => (
  <div {...className && { className }}>
    <TextField
      {...props}
      {...props.multiLine && { hintStyle: { color: theme }, textareaStyle: { color: theme } }}
      floatingLabelText={label}
      underlineStyle={{ borderColor: theme }}
      underlineFocusStyle={{ borderColor: theme }}
      floatingLabelStyle={{ color: theme }}
      inputStyle={{ color: theme }}
    />
  </div>
  );

TextInput.propTypes = {
  theme: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.node,
  multiLine: PropTypes.bool,
};

export default TextInput;
