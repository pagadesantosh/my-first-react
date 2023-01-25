import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
        setOnline(true);
    }
    const handleOffine = () => {
        setOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffine);

    return () => {
        window.removeEventListener("online" , handleOnline);
        window.removeEventListener("offline" , handleOffine);
    }



  }, []);
  return isOnline;
};

export default useOnline;