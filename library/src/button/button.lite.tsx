import { Show } from "@builder.io/mitosis";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { buttonVariants } from "./buttonvariants";

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  element: "button" | "a" | "div";
  buttonRef?: any;
  children?: JSX.Element;
  // needs much more attributes like onclick etc but react-independent attribute derivation
}

export default function Button(props: Readonly<ButtonProps>) {
  return (
    <>
      <Show when={props.element === "a"}>
        <a
          className={cn(
            buttonVariants({
              variant: props.variant,
              size: props.size,
              className: props.className,
            })
          )}
          ref={props.buttonRef}
          {...props}
        >
          {props.children}
        </a>
      </Show>
      <Show when={props.element === "button"}>
        <button
          className={cn(
            buttonVariants({
              variant: props.variant,
              size: props.size,
              className: props.className,
            })
          )}
          ref={props.buttonRef}
          {...props}
        >
          {props.children}
        </button>
      </Show>
    </>
  );
}
