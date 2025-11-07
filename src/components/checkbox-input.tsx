import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import CheckIcon from "../assets/icons/check-regular.svg?react";
import Skeleton from "./skeleton";

export const checkboxInputWrapperVariants = cva(
  `inline-flex items-center justify-center relative group`
);

export const checkboxInputVariants = cva(
  `appearance-none peer flex items-center justify-center transition overflow-hidden cursor-pointer`,
  {
    variants: {
      variant: {
        none: "",
        default: `border-2 border-solid border-green-base 
        hover:border-green-dark hover:bg-green-dark/20 
        checked:border-green-base checked:bg-green-base
        group-hover:checked:border-green-dark group-hover:checked:bg-green-dark`,
      },
      size: {
        md: "w-5 h-5 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
    },
  }
);

export const checkboxInputIconVariants = cva(
  `absolute top-1.5 left-1 -translate-y-1/2 hidden peer-checked:block fill-white`,
  {
    variants: {
      size: {
        md: "w-3 h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface CheckboxInputProps
  extends VariantProps<typeof checkboxInputVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean;
}

export default function CheckboxInput({
  size,
  variant,
  disabled,
  className,
  loading,
  ...props
}: CheckboxInputProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={checkboxInputVariants({ size, variant: "none" })}
      />
    );
  }

  return (
    <label className={checkboxInputWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={checkboxInputVariants({ size, disabled, variant })}
        {...props}
      />
      <Icon className={checkboxInputIconVariants({ size })} svg={CheckIcon} />
    </label>
  );
}
