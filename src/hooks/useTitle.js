import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Dynamic Chart`;
  }, [title]);

  return null;
};
