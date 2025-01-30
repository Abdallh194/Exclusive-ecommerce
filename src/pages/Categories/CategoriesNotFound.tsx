import Lottie from "lottie-react";
import not_found from "@assets/LottieFiles/not_found.json";
import { useParams, useRouteError } from "react-router-dom";

interface RouteError {
  status?: number;
  statusText?: string;
}

const CategoriesNotFound = () => {
  const error = useRouteError() as RouteError;
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
        {error?.status || "Unknown Status"} {prefix}
      </h2>
      <h3>{error?.statusText || "Unknown Error"}</h3>
    </>
  );
};

export default CategoriesNotFound;
