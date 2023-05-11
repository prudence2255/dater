import { useState } from "react";

/**
 * toggle active element
 */

const useScroll = () => {
  const [scroll, setScroll] = useState(false);

  return {
    scroll,
    setScroll,
  };
};

export default useScroll;
