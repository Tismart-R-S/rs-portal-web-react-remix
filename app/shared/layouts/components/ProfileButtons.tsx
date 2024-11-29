import { Link } from "@remix-run/react";
import { LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Button } from "@ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const ProfileButtons = () => {
  return (
    <>
      <div className="flex gap-3">
        <div>
          <h5 className="font-semibold text-sm">Pepita Juárez</h5>
          <p className="text-muted-foreground text-xs">Postulante</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="w-9 h-9">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@username"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">email</p>
                <p className="text-xs leading-none text-muted-foreground">
                  user@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile" className="cursor-pointer">Profile</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button
        variant="ghost"
        className="text-rose-600 hover:text-white hover:bg-rose-500 active:bg-rose-700"
      >
        <LogOut strokeWidth={3} />
      </Button>
    </>
  );
};

export default ProfileButtons;
