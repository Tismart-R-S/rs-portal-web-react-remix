import { Form, Link } from '@remix-run/react';
import { LogOut } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar';
import { Button } from '@ui/button';
import { ProfileButtonsProps } from '../layout-props.interface';

const ProfileButtons = ({ user }: ProfileButtonsProps) => {
  return (
    <>
      <div className="flex gap-3">
        <div>
          <h5 className="font-semibold text-sm">{user.names}</h5>
          <p className="text-muted-foreground text-xs">Postulante</p>
        </div>
        <Link to="/profile">
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
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
