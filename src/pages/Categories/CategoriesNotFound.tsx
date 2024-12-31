import Lottie from "lottie-react";
import not_found from "@assets/LottieFiles/not_found.json";
import { useParams, useRouteError } from "react-router-dom";
const CategoriesNotFound = () => {
  const error = useRouteError();
  const { prefix } = useParams();

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
      <h2>
        {error.status} {prefix}
      </h2>
      <h3>{error.statusText}</h3>
    </>
  );
};

export default CategoriesNotFound;
