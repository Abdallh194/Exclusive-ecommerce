import Lottie from "lottie-react";
import not_found from "@assets/LottieFiles/not_found.json";
import { useRouteError } from "react-router-dom";
const PageNotFound = () => {
  const error = useRouteError();

  return (
    <>
      <Lottie
        animationData={not_found}
        style={{
          maxWidth: "365px",
          position: "relative",
          top: "100px",
          margin: "auto",
        }}
      />
      <h2>{error.status}</h2>
      <h3>{error.statusText}</h3>
    </>
  );
};

export default PageNotFound;