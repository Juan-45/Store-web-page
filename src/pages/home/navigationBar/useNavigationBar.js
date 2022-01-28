import { useEffect, useState, useRef } from "react";

const useNavigationBar = (shouldDisplay) => {
  const [shouldRemoveComponent, setShouldRemoveComponent] = useState(false);
  const timerID = useRef();

  useEffect(() => {
    const timer = () =>
      window.setTimeout(() => setShouldRemoveComponent(true), 1000);
    if (!shouldDisplay) {
      timerID.current = timer();
    } else {
      window.clearTimeout(timerID.current);
      setShouldRemoveComponent(false);
    }
  }, [shouldDisplay]);

  return {
    shouldRemoveComponent,
  };
};

export default useNavigationBar;
