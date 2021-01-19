import { useState, useRef, useEffect, useReducer } from "react";
import ResizeObserver from "resize-observer-polyfill";

// tree 树形组件使用. | 递归组件使用
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

// tree 树形组件使用. | 递归组件使用
export function useMeasure() {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [{ ref }, bounds];
}

// 自定义 hooks 开关
export function useToggle(initialValue = false) {
  return useReducer((state) => !state, initialValue);
}

// 点赞等功能的自定义hooks
const useClick = ({ value = 0, isActive = false }) => {
  const [isTouch, toggleIsTouch] = useToggle(isActive);
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value);
  }, [value]);

  const HandleClick = () => {
    setCount((count) => (!isTouch ? count + 1 : count - 1));
    toggleIsTouch();
  };

  return { value: count, isTouch, HandleClick };
};
