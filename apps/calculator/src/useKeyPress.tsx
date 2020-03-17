import { useEffect } from "react";

export const useKeyPress = (
  targetKey: string | RegExp,
  callback: (key: string) => void
) => {
  const onKeyDown = (e: KeyboardEvent) => {
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
