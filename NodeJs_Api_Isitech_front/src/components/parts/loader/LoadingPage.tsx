// App.js
import { useState, useEffect } from "react";

import Loader from "./Loader";

// wait 5sc before showing the children

const LoadingPage = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  return <div>{isLoading ? <Loader /> : children}</div>;
};

export default LoadingPage;
