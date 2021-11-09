import React from "react";
import "./button.scss";
import "../../assets/scss/_tokens.scss";

export interface ButtonProps  {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
   /**
   * Disables the Button, preventing mouse events,
   */
  disabled?: boolean;
  /**
   * Link address
   */
  href: string;
  /**
   * Optional click handler
   */
  // onClick?: (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => void;
};

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = true,
  backgroundColor,
  size = "medium",
  label,
  // onClick,
  href = "javascript:void(0);"
}: ButtonProps) => {
  const mode = primary
    ? "button--primary"
    : "button--secondary";
  return (
    <a
      type="button"
      className={["button", `button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor ? { backgroundColor }: {}}
      // onClick={onClick}
      href={href}
    >
      {label}
    </a>
  );
};

export default Button;