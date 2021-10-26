import React from "react";
import loadingGif from "./loading.gif";
import loadingStyles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={loadingStyles.loading}>
      <img src={loadingGif} alt="loading-gif" />
    </div>
  );
};

export default Loading;
