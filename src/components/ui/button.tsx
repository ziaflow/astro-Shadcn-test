import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
          default: "border:none",
          snesNature: "snes-button p-1",
          snesPlumber:
          "snes-button has-plumber-color p-1",
          snesSunshine:
          "snes-button has-sunshine-color p-1",
          snesOcean:
          "snes-button has-ocean-color p-1",
          snesTurquoise:
          "snes-button has-turquoise-color p-1",
          snesPhantom:
          "snes-button has-phantom-color p-1",
          snesRose:
          "snes-button has-rose-color p-1",
          snesGalaxy:
          "snes-button has-galaxy-color p-1",
          snesEmber:
          "snes-button has-ember-color p-1",
        secondary:
          "snes-button",
        link: "snes-link",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
