import { Link } from '@remix-run/react';
import { LogOut } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar';
import { Button } from '@ui/button';

const ProfileButtons = () => {
  return (
    <>
      <div className="flex gap-3">
        <div>
          <h5 className="font-semibold text-sm">Pepita Juárez</h5>
          <p className="text-muted-foreground text-xs">Postulante</p>
        </div>
        <Link to="/profile">
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
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
