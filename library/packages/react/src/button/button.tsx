import * as React from "react";
import { forwardRef } from "react";

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  element: "button" | "a" | "div";
  buttonRef?: any;
  children: JSX.Element;
  // needs much more attributes like onclick etc but react-independent attribute derivation
}

import { VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { buttonVariants } from "./buttonvariants";

const Button = forwardRef<Readonly<ButtonProps>["buttonRef"]>(function Button(
  props: Readonly<ButtonProps>,
  buttonRef
) {
  return (
    <>
      {props.element === "a" ? (
        <a
          ref={buttonRef}
          {...props}
          className={cn(
            buttonVariants({
              variant: props.variant,
              size: props.size,
              className: props.className,
            })
          )}
        >
          {props.children}
        </a>
      ) : null}
      {props.element === "button" ? (
        <button
          ref={buttonRef}
          {...props}
          className={cn(
            buttonVariants({
              variant: props.variant,
              size: props.size,
              className: props.className,
            })
          )}
        >
          {props.children}
        </button>
      ) : null}
    </>
  );
});

export default Button;
