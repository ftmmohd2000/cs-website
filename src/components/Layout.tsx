import React, { ReactNode } from "react";

interface Props {
  // children: JSX.Element[] | Element[];
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default Layout;
