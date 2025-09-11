import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
            variant="snesOcean"
            className="mr-2 py-4 md:py-0"
        >
          <button className="text-base p-1 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">Light</button>
          <button className="text-base p-1 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">Dark</button>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white mt-4">
        <DropdownMenuItem onClick={() => setTheme("light")} className="snes-button has-sunshine-color p-0">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="snes-button has-galaxy-color p-0">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="snes-button has-phantom-color p-0">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
