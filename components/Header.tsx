import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./MobileSidebar";
// import { UserNav } from "./user-nav";
import { Mountain } from "lucide-react";
import CustomLink from "./CustomLink";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <CustomLink className="flex items-end gap-2 font-semibold text-lg tracking-tight"
            href="/"
          >
            <Mountain className="h-8 w-8" /> Logo
          </CustomLink>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          {/* <UserNav /> */}
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}