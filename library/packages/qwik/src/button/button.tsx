import { cn } from "../lib/utils";

import { buttonVariants } from "./buttonvariants";

import { JSX } from "@builder.io/mitosis/jsx-runtime";

import { Fragment, Slot, component$, h } from "@builder.io/qwik";

import { VariantProps } from "class-variance-authority";

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  element: "button" | "a" | "div";
  buttonRef?: any;
  children: JSX.Element;
  // needs much more attributes like onclick etc but react-independent attribute derivation
}
export const Button = component$((props: Readonly<ButtonProps>) => {
  return (
    <Fragment>
      {props.element === "a" ? (
        <a
          ref={props.buttonRef}
          {...props}
          class={cn(
            buttonVariants({
              variant: props.variant,
              size: props.size,
              className: props.className,
            })
          )}
        >
          <Slot></Slot>
        </a>
      ) : null}
      {props.element === "button" ? (
        <button
          ref={props.buttonRef}
          {...props}
          class={cn(
            buttonVariants({
              variant: props.variant,
              size: props.size,
              className: props.className,
            })
          )}
        >
          <Slot></Slot>
        </button>
      ) : null}
    </Fragment>
  );
});

export default Button;
