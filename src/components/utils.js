import { useState } from "react";

// Custom Local Storage Hook
export const useLocalStorage = (key, initialValue) => {
  const [storedData, setStoredData] = useState(() => {
    const data = window.localStorage.getItem(key);
    return data ? JSON.parse(data) : initialValue;
  });
  const setData = (data) => {
    const dataToStore = data instanceof Function ? data(storedData) : data;
    setStoredData(dataToStore);
    window.localStorage.setItem(key, JSON.stringify(dataToStore));
  };
  return [storedData, setData];
};

// Source:
//  https://dev.to/saranshk/react-hooks-and-local-storage-let-s-build-a-todo-app-39g3