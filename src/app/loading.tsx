"use client";

import React, { useEffect } from "react";
import "@/Css/loadingStyles.css";
import { useLoading } from "@/contexts/LoadingContext";

const HamsterWheelLoader: React.FC = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Set loading to true when component mounts
    setIsLoading(true);

    // Set loading to false when component unmounts
    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  return (
    <div className="loader-container">
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default HamsterWheelLoader;
