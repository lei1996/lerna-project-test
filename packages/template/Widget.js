import React, { useState, useEffect } from 'react';
import { CnIcon } from '@/components/CnIcon';
import { useToggle } from '@/utils/helpers';
import { Badge } from './Badge';

import less from './widget.less';

// 收藏
export const Star = ({ isActive }) => {
    const { _, isTouch, HandleClick } = useClick({ isActive });
  
    // 调用接口
    const fetchXXX = () => {};
  
    return (
      <div onClick={() => HandleClick()} className={less.container}>
        <CnIcon
          icon={isTouch ? 'iconshoucang2' : 'iconshoucang11'}
          style={{ fontSize: '19px', color: isTouch ? '#f01414' : '#333333' }}
        />
      </div>
    );
  };
  
  // 点赞
  export const Like = ({ value = 100, isActive, isShowNum = true }) => {
    const { count, isTouch, HandleClick } = useClick({ value, isActive });
  
    // 调用接口
    const fetchXXX = () => {};
  
    return (
      <div onClick={() => HandleClick()} className={less.container}>
        <CnIcon
          icon={'icondianzan2'}
          style={{ fontSize: '19px', color: isTouch ? '#f01414' : '#333333' }}
        />
        {isShowNum && (
          <div className={less.ml3} style={{ color: isTouch ? '#f01414' : '#333333' }}>
            {count}
          </div>
        )}
      </div>
    );
  };
  
  // 分享
  export const Share = ({ id = '' }) => {
    // 调用接口
    const fetchXXX = () => {};
  
    return (
      <div onClick={() => fetchXXX()} className={less.container}>
        <CnIcon icon={'iconzhuanfa'} style={{ fontSize: '19px', color: '#333333' }} />
      </div>
    );
  };
  
  // 评论
  export const CommentBadge = ({ id = '', value = '222' }) => {
    // 调用接口
    const fetchXXX = () => {};
  
    return (
      <div onClick={() => fetchXXX()} className={less.container}>
        <CnIcon icon={'iconpinglun'} style={{ fontSize: '19px', color: '#333333' }} />
        <div className={less.badge}>
          <Badge value={value} />
        </div>
      </div>
    );
  };
  
  // 写评论 那个按钮占位符
  export const CommentButton = ({ id = '' }) => {
    // 调用接口
    const fetchXXX = () => {};
  
    return (
      <div onClick={() => fetchXXX()} className={less.CommentButtonContainer}>
        <CnIcon icon={'iconzuoti'} style={{ fontSize: '19px', color: '#333333' }} />
        <div className={less.text}>写评论</div>
      </div>
    );
  };
  