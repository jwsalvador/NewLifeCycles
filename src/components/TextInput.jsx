import React from 'react';
import TextField from 'material-ui/TextField';

const TextInput = ({theme, label, className, ...props}) => {
  return (
    <div {...className && {className}}>
       <TextField
        {...props}
        {...props.multiLine && {hintStyle: {color: theme}, textareaStyle: {color: theme}}}
        floatingLabelText={label}
        underlineStyle={{borderColor: theme}}
        underlineFocusStyle={{borderColor: theme}}
        floatingLabelStyle={{color: theme}}
        inputStyle={{color: theme}}
        />
    </div>
  );
};

export default TextInput;