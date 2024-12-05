import { Form, Link } from "@remix-run/react";
import { LogOut, UserRound } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Button } from "@ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu";
import { ProfileButtonsProps } from "../layout-props.interface";

const ProfileButtons = ({ user }: ProfileButtonsProps) => {
  return (
    <>
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex gap-4 cursor-pointer">
              <div>
                <h5 className="font-semibold text-sm">{user.names}</h5>
                <p className="text-muted-foreground text-xs">Postulante</p>
              </div>
              <Avatar className="w-9 h-9 bg-gray-100 flex">
                <AvatarImage
                  className="w-6 m-auto"
                  src="" // Cuando los perfiles estén disponibles se deberá colocar la url del perfil
                  alt="@username"
                ></AvatarImage>
                <AvatarFallback>
                  <UserRound />
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">email</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile" className="cursor-pointer">
                Mi perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/applicant-data" className="cursor-pointer">
                Mis datos de postulación
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Form method="post" action="/logout">
        <Button
          variant="ghost"
          className="text-rose-600 hover:text-white hover:bg-rose-500 active:bg-rose-700"
        >
          <LogOut strokeWidth={3} />
        </Button>
      </Form>
    </>
  );
};

export default ProfileButtons;
