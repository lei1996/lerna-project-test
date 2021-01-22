import React, { memo } from 'react';

import less from './index.less';

// Text组件定制 -> 无状态组件
export const Text = memo(({ text, style = {} }) => (
  <span className={less.DefaultText} style={style}>
    {text}
  </span>
));
