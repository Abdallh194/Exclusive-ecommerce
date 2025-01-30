import React, { memo } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store";
interface ProtectedRouteProps {
  children: JSX.Element;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isloggin } = useAppSelector((state: RootState) => state.user);
  console.log("isloggin in ProtectedRoute:", isloggin);
  return isloggin ? children : <Navigate to="/login" />;
};
export default memo(ProtectedRoute);
