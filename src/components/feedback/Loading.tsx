import { Spinner } from "react-bootstrap";

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
    return <h1>{error}</h1>;
  }
  return <>{children}</>;
};

export default Loading;
