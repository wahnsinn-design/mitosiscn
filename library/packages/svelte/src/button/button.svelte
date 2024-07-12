<script context="module" lang="ts">
  export interface ButtonProps extends VariantProps<typeof buttonVariants> {
    className?: string;
    element: "button" | "a" | "div";
    buttonRef?: any;
    // needs much more attributes like onclick etc but react-independent attribute derivation
  }
</script>

<script lang="ts">
  import { VariantProps } from "class-variance-authority";
  import { cn } from "../lib/utils";
  import { buttonVariants } from "./buttonvariants";

  export let element: ButtonProps["element"];
  export let buttonRef: ButtonProps["buttonRef"] = undefined;
  export let variant: ButtonProps["variant"];
  export let size: ButtonProps["size"];
  export let className: ButtonProps["className"] = undefined;
</script>

{#if element === "a"}
  <a
    bind:this={buttonRef}
    {...$$props}
    class={cn(
      buttonVariants({
        variant: variant,
        size: size,
        className: className,
      })
    )}><slot /></a
  >
{/if}

{#if element === "button"}
  <button
    bind:this={buttonRef}
    {...$$props}
    class={cn(
      buttonVariants({
        variant: variant,
        size: size,
        className: className,
      })
    )}><slot /></button
  >
{/if}