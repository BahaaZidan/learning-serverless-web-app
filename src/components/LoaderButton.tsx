import React from "react";
import Button, { ButtonProps } from "react-bootstrap/Button";
import { BsArrowRepeat } from "react-icons/bs";
import "./LoaderButton.css";

type LoaderButtonProps = {
  isLoading: boolean;
  className?: string;
  disabled: boolean;
} & ButtonProps;

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}: LoaderButtonProps) {
  return (
    <Button
      disabled={disabled || isLoading}
      className={`LoaderButton ${className}`}
      {...props}
    >
      {props.children}
      {isLoading && <BsArrowRepeat className="spinning" />}
    </Button>
  );
}
