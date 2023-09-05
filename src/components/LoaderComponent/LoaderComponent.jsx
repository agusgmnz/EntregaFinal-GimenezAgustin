import React from "react";
import { Waveform } from "@uiball/loaders";

const LoaderComponent = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Waveform size={40} lineWeight={3.5} speed={0.5} color="Red" />
    </div>
  );
};

export default LoaderComponent;
