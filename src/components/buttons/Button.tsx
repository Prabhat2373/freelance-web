import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outlined" | "filled" | "outline-hover";
  color?: string;
  width?: string;
}

const Button = ({
  children,
  variant = "filled",
  color = "red",
  disabled = false,
  width,
  ...props
}: IButtonProps) => {
  let buttonStyles: React.CSSProperties = {
    padding: "0.75rem 2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "9999px",
    fontWeight: "600",
    cursor: disabled ? "not-allowed" : "pointer",
  };

  if (width) {
    buttonStyles.width = width;
  }

  switch (variant) {
    case "outlined":
      buttonStyles = {
        ...buttonStyles,
        borderWidth: "2px",
        borderColor: disabled ? "gray" : color,
        color: disabled ? "gray" : color,
        backgroundColor: "transparent",
        transition: "background-color 0.3s, color 0.3s",
      };

      if (!disabled) {
        buttonStyles = {
          ...buttonStyles,
          "&:hover": {
            backgroundColor: color,
            color: "white",
          },
        };
      }
      break;
    case "outline-hover":
      buttonStyles = {
        ...buttonStyles,
        borderWidth: "2px",
        borderColor: "white",
        color: "white",
        backgroundColor: color,
        transition: "background-color 0.3s, color 0.3s",
      };
      break;
    case "filled":
    default:
      buttonStyles = {
        ...buttonStyles,
        color: "white",
        backgroundColor: color,
        transition: "background-color 0.3s, color 0.3s",
      };
      break;
  }

  return (
    <button
      style={buttonStyles}
      {...props}
      className={`${variant === "outlined" ? `hover:bg-${color}-500` : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
