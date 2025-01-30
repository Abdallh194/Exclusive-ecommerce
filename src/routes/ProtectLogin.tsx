import React, { memo } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectLogin: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isloggin, isToCheckout } = useAppSelector(
    (state: RootState) => state.user
  );

  if (isloggin) {
    const redirectPath = isToCheckout
      ? "/user-profile/checkout"
      : "/user-profile";
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default memo(ProtectLogin);
