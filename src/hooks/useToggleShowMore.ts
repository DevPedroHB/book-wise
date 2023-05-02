import { useState } from "react";

export function useToggleShowMore(string: string, maxLength: number) {
  const [showMore, setShowMore] = useState(() => {
    return string.length <= maxLength;
  });

  function toggleShowMore() {
    setShowMore((prev) => !prev);
  }

  const text = showMore ? string : string.slice(0, maxLength) + "...";

  return { showMore, toggleShowMore, text };
}
