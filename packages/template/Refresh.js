import React, { useRef } from 'react';

import less from './refresh.less';

// 滚动条滚动到底部, fn 请求接口.
export const Refresh = ({
  height = '200px',
  isFetching = false,
  isFinished = false,
  fn,
  children,
}) => {
  const $ref = useRef(null);

  function handleScroll(e) {
    if ($ref.current && e.target !== $ref.current) {
      return;
    }
    if (isFetching || isFinished) {
      return;
    }

    const $div = e.target;
    if (
      $div.scrollTop + parseInt(height) === $ref.current.scrollHeight &&
      $div.scrollHeight > $div.clientHeight
    ) {
      fn();
    }
  }

  return (
    <div ref={$ref} onScroll={handleScroll} className={less.Container} style={{ height }}>
      {children}
    </div>
  );
};