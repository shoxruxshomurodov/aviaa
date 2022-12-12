import clsx from "clsx";
import React, { ReactElement, ReactNode } from "react";
import { Variant, Shape, Size } from "../../enum";
interface ButtonProps {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  className?: string;
  children?: ReactNode | ReactElement;
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.small]: "px-[18px] py-2",
  [Size.middle]: "px-5 py-2.5",
  [Size.large]: "px-5 py-4",
};

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.outlined]: "border border-2",
  [Variant.dashed]: "bg-yellow-100 text-yellow-800",
  [Variant.danger]: "bg-green-100 text-green-800",
  [Variant.link]: "bg-blue-100 text-blue-800",
  [Variant.primary]: "bg-primary-yellow text-white",
  [Variant.secondary]: "bg-blue-100 text-blue-800",
  [Variant.success]: "bg-blue-100 text-blue-800",
  [Variant.warning]: "bg-blue-100 text-blue-800",
  [Variant.default]: "",
};

const SHAPES_MAPS: Record<Shape, string> = {
  [Shape.circle]: "rounded-full",
  [Shape.round]: "rounded-[15px]",
};

const Index: React.FC<ButtonProps> = ({
  variant,
  size,
  shape,
  className = "",
  children,
}) => {
  return (
    <button
      className={clsx(
        className,
        variant && VARIANT_MAPS[variant],
        size && SIZE_MAPS[size],
        shape ? SHAPES_MAPS[shape] : "rounded-[10px]",
        "border-2 border-transparent "
      )}
    >
      {children}
    </button>
  );
};

export default Index;
