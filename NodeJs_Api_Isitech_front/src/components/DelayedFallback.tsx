import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./parts/loader/Loader";
import LoadingPage from "./parts/loader/LoadingPage";

function DelayedFallback({
  delay,
  fallback,
  fetch,
}: {
  delay: number;
  fallback: React.ReactNode;
  fetch: (() => Promise<any>)[];
}) {
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all(fetch.map((service) => service))
      .then((responses) => {
        const allSuccessful = responses.every(
          (response) => response.length > 0 || response.success !== false
        );

        if (!allSuccessful) {
          navigate("/signin");
        }
      })
      .catch((error) => {
        navigate("/signin");
      });
  }, [delay, fetch, navigate]);

  return <LoadingPage delay={delay}>{fallback}</LoadingPage>;
}

export default DelayedFallback;
