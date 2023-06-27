import React from "react";
import withClientProtection from "../../hoc/client/withClientAuth";

const ClientLayout = ({ children }) => {
  return (
    <div>
      <h1>Client Layout</h1>
      {children}
    </div>
  );
};

export default withClientProtection(ClientLayout);
