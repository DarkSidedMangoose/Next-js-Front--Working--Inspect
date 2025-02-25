import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Hello this is root</h1>

      {children}
    </div>
  );
};

export default Layout;
