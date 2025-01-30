import Lottie from "lottie-react";
import { Spinner } from "react-bootstrap";
import errorAnimation from "@assets/LottieFiles/errorAnimation.json";
import { memo } from "react";
interface LoadingProps {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
}
const Loading = ({ error, status, children }: LoadingProps) => {
  if (status == "pending") {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <Spinner animation="border" size="sm" /> Loading ...
      </div>
    );
  }

  if (status == "failed") {
    return (
      <>
        <Lottie animationData={errorAnimation} />
        <h1>{error}</h1>
      </>
    );
  }
  return <>{children}</>;
};

export default memo(Loading);
