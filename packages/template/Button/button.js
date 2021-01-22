import React from 'react';
import { Text } from '@/components/Text';
import { Center } from './center';

import less from './button.less';

export const Button = ({ text = '', fontStyle = {}, fn }) => {
  return (
    <div onClick={fn} className={less.ButtonContainer}>
      <Center>
        <Text text={text} style={fontStyle} />
      </Center>
    </div>
  );
};
