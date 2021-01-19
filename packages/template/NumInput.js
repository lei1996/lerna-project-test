import React, { memo, useState, useEffect } from 'react';

import { Icon } from 'antd';
import { ICON_FONT_URL } from '@/global/constant';

import less from './index.less';

export const IconFont = Icon.createFromIconfontCN({
  scriptUrl: ICON_FONT_URL,
});

// 数量的计数器
export const NumCountComponent = memo(
  ({ value = '', MIN_NUM = 1, MAX_NUM = 10, disable = false, onChange }) => {
    // 最小值为1
    const [count, setCount] = useState(value || MIN_NUM);

    useEffect(() => {
      setCount(value <= MIN_NUM ? MIN_NUM : value);
    }, [value]);

    const ChangeVal = e => {
      if (disable) return;
      let value = e.target.value;
      value = value.replace(/[^0-9]/g, '');

      if (value >= MAX_NUM) {
        setCount(MAX_NUM);
        onChange(MAX_NUM);
        return;
      }

      setCount(+value || MIN_NUM);
      onChange(+value || MIN_NUM);
    };

    // 数量 +1
    const increment = () => {
      if (disable) return;
      if (count >= MAX_NUM) {
        setCount(MAX_NUM);
        onChange(MAX_NUM);
        return;
      }
      setCount(count + 1);
      onChange(count + 1);
    };

    // 数量 -1
    const decrement = () => {
      if (disable) return;
      if (count <= MIN_NUM) {
        setCount(MIN_NUM);
        onChange(MIN_NUM);
        return;
      }
      setCount(count - 1);
      onChange(count - 1);
    };

    return (
      <div className={less.NumCountContainer}>
        <div className={less.fontBox} onClick={() => decrement()}>
          <IconFont
            type="iconminus"
            className={count <= MIN_NUM || disable ? less.font10 : less.disable}
          />
        </div>
        <div className={less.numCountIptBox}>
          <input className={less.numCountIpt} value={count} onChange={ChangeVal} />
        </div>
        <div className={less.fontBox} onClick={() => increment()}>
          <IconFont
            type="iconadd1"
            className={count >= MAX_NUM || disable ? less.font10 : less.disable}
          />
        </div>
      </div>
    );
  },
);
