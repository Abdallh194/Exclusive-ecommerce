import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { memo } from "react";

interface CartProps {
  length: number;
  className: string;
  to: string;
  children: React.ReactNode;
}
const QuantityCounter = ({ className, to, length, children }: CartProps) => {
  return (
    <>
      <Nav.Link className={className} as={Link} to={to} data-length={length}>
        {children}
      </Nav.Link>
    </>
  );
};

export default memo(QuantityCounter);
