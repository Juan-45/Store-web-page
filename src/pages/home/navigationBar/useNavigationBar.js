import { useEffect, useState } from "react";

const useNavigationBar = (shouldDisplay) => {
  const [shouldRemoveComponent, setShouldRemoveComponent] = useState(false);

  useEffect(() => {
    const timer = () => {
      if (!shouldDisplay) {
        setTimeout(() => setShouldRemoveComponent(true), 420);
      } else setShouldRemoveComponent(false);
    };
    timer();
    clearTimeout(timer);
  }, [shouldDisplay]);

  return {
    shouldRemoveComponent,
  };
};

export default useNavigationBar;
