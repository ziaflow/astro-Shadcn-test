import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BookingWidget } from "@/components/widgets/BookingWidget";
import { Button } from "@/components/ui/button";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="px-2 md:hidden">
        <Menu className="h-5 w-5" onClick={() => setIsOpen(true)}>
          <span className="sr-only">Menu Icon</span>
        </Menu>
      </SheetTrigger>

      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="font-bold text-xl">
            ZiaFlow
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col justify-center items-center gap-2 mt-4">
          {routeList.map(({ href, label }: RouteProps) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={buttonVariants({ variant: "ghost" })}
            >
              {label}
            </a>
          ))}
          <div className="mt-4">
             <BookingWidget triggerClassName="w-full" />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
