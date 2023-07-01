import React from "react";

const StepLayout = ({ title, subTitle, children }) => {
  return (
    <div>
      <div>
        <h1 className="text-gray-900 text-xl font-medium font-montserrat">
          {title}
        </h1>
        <p>{subTitle}</p>
      </div>
      {children}
    </div>
  );
};

export default StepLayout;
