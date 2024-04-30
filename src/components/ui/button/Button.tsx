import { FC, ReactElement, ReactNode } from "react";
import classes from "./Button.module.css";
import className from "../../../common/utils/className";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  startIcon,
  endIcon,
  disabled,
  children,
}): ReactElement => {
  return (
    <button
      type="button"
      className={className(classes.btn, {
        [classes.disabled]: disabled === true,
        [classes["btn--primary"]]: variant === "primary",
        [classes["btn--secondary"]]: variant === "secondary",
      })}
      disabled={disabled}
    >
      {startIcon && (
        <span className={classes["btn-icon-start"]}>{startIcon}</span>
      )}
      {children}
      {endIcon && <span className={classes["btn-icon-end"]}>{endIcon}</span>}
    </button>
  );
};

export default Button;
