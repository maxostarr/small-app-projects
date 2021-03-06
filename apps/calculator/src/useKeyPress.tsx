import { useEffect, Key } from "react";

export const useKeyPress = (
  targetKey: string | RegExp,
  callback: (key: Key) => void
) => {
  const onKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (typeof targetKey == "string") {
      if (e.key === targetKey) {
        callback(e.key);
      }
    }
    if (targetKey instanceof RegExp) {
      if (targetKey.test(e.key)) {
        callback(e.key);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });
};
