import React, { useState } from 'react';
import { Text } from '@/components/Text';

import less from './textarea.less';

const useInput = ({ initialValue = '', maxLength = 0 }) => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    const $value = e.target.value;
    if (!!maxLength && $value.length > maxLength) {
      setValue($value.slice(0, maxLength));
      return;
    }

    setValue($value);
  };

  return { value, onChange };
};

export const TextArea = ({
  value = '',
  onChange,
  maxLength = 0,
  showNum = false,
  onBlur,
  onKeyPress,
  placeholder = '',
}) => {
  const input = useInput({ initialValue: value, maxLength });

  const handleChange = e => {
    input.onChange(e);
    if (onChange) onChange(e);
  };

  return (
    <div className={less.TextAreaContainer}>
      <textarea
        value={input.value}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
      />
      {showNum && (
        <div className={less.num}>
          <Text text={`${input.value.length}/${maxLength}`} />
        </div>
      )}
    </div>
  );
};
